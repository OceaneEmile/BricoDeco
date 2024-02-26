import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { fetchTools } from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  categoriesCreate,
  checkFirstStep,
  imageCreate,
  resetAllGood,
  resumeCreate,
  titleCreate,
  toolsCreate,
} from "../../store/reducer/tutorielCreate";

// ----------------------------------------------------------------------------------------------------//

export default function CreateTuto() {
  // create a dispatch function to dispatch an action
  const dispatch = useDispatch();
  // create a navigate function to redirect
  const navigate = useNavigate();
  // select state from the store for check if the user is logged
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  // select state from the store for the categories
  const categories = useSelector(
    (state: RootState) => state.tutoriel.categories
  );
  // select state from the store for the tools
  const tool = useSelector((state: RootState) => state.tutoriel.tools);
  const missingValuecheck = useSelector(
    (state: RootState) => state.tutorielCreate.missingValue
  );
  // ----------------------------------------------------------------------------------------------------//

  // if the user is not logged redirect to the home page
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);
  // when the component is mounted fetch the tools
  useEffect(() => {
    dispatch(fetchTools() as any);
    dispatch(resetAllGood());
  }, []);

  // ----------------------------------------------------------------------------------------------------//

  // Listen to the input title
  function inputTitleCreate(e: any) {
    dispatch(titleCreate(e.target.value));
  }
  // Listen to the input description
  function inputDescriptionCreate(e: any) {
    dispatch(resumeCreate(e.target.value));
  }
  // Add or remove category from the list
  const categoriesInput = [] as any;
  function changeInputCategoryCreate(e: any) {
    const categorie = parseInt(e.target.id);
    const existingCategoryIndex = categoriesInput.findIndex(
      (item: any) => item.id === categorie
    );
    if (e.target.checked) {
      // if checked is true add the category to the list
      if (existingCategoryIndex !== -1) {
        categoriesInput[existingCategoryIndex].id = categorie;
      } else {
        // else add the category to the list
        categoriesInput.push({ id: categorie });
      }
    } else {
      //if checked is false remove the category from the list
      if (existingCategoryIndex !== -1) {
        categoriesInput.splice(existingCategoryIndex, 1);
      }
    }
  }

  function uploadImage(e: any) {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post(
        "http://oceaneemile-server.eddi.cloud/projet-13-brico-deco-back/public/api/image/store",
        formData
      )
      .then((res) => {
        dispatch(imageCreate(res.data.image_link));
      });
  }
  // Add or remove tool from the list
  const toolsInput = [] as any;
  function inputToolsCreate(e: any) {
    const tool = parseInt(e.target.id);
    const existingToolIndex = toolsInput.findIndex(
      (item: any) => item.id === tool
    );
    if (e.target.checked) {
      // if checked is true add the tool to the list
      if (existingToolIndex !== -1) {
        toolsInput[existingToolIndex].id = tool;
      } else {
        // else add the tool to the list
        toolsInput.push({ id: tool });
      }
    } else {
      //if checked is false remove the tool from the list
      if (existingToolIndex !== -1) {
        toolsInput.splice(existingToolIndex, 1);
      }
    }
  }
  const [message, setMessage] = useState("");
  function checkInfo() {
    dispatch(toolsCreate(toolsInput));
    dispatch(categoriesCreate(categoriesInput));
    dispatch(checkFirstStep());
    if (missingValuecheck) {
      setMessage("Veuillez remplir tous les champs necessaires");
    } else {
      setMessage("");
    }
  }
  useEffect(() => {
    if (!missingValuecheck) {
      navigate("/tutoriel/create/steps");
    }
  }, [missingValuecheck]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Créer votre Tuto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Titre:
            </label>
            <div className="mt-2">
              <input
                onChange={inputTitleCreate}
                id="title"
                name="title"
                type="title"
                placeholder="Titre du tutoriel"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                onChange={inputDescriptionCreate}
                id="description"
                name="description"
                placeholder="Rédigez la description de votre tutoriel ici"
                required
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
            <p className="text-left">Categorie:</p>
            <div className="mt-2 flex flex-wrap">
              {categories.map((category: any) => (
                <div key={category.id}>
                  <input
                    type="checkbox"
                    id={category.id}
                    value={category.id}
                    onChange={changeInputCategoryCreate}
                  />
                  <label>{category.nomCategorie}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter votre image :
            </label>
            <input
              type="file"
              id="image"
              name="file"
              accept="image/png image/jpeg"
              onChange={uploadImage}
            />
          </div>

          <div className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
            <p className="text-left">Outils:</p>
            <div className="mt-2 flex flex-wrap">
              {tool.map((outil: any) => (
                <div key={outil.id}>
                  <input
                    type="checkbox"
                    id={outil.id}
                    value={outil.id}
                    onChange={inputToolsCreate}
                  />
                  <label>{outil.nomDeLoutil}</label>
                </div>
              ))}
            </div>
          </div>
          <div onClick={checkInfo}>
            <Button text={"Ajouter les etapes"} />
            {message && <p className="text-red-500 text-center">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

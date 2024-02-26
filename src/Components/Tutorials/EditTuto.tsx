import { useParams, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTools, fetchTutorielById } from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import axios from "axios";
import {
  categoriesUpdate,
  checkFirstStep,
  imageUpdate,
  resetAllGoodU,
  resumeUpdate,
  titleUpdate,
  toolsUpdate,
} from "../../store/reducer/tutorielUpdate";
export default function EditTuto() {
  const { id } = useParams();
  const tutoriel = useSelector((state: RootState) => state.tutoriel.tutoriel);
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
    (state: RootState) => state.tutorielUpdate.missingValue
  );

  useEffect(() => {
    dispatch(fetchTutorielById(id) as any);
    dispatch(fetchTools() as any);
    dispatch(resetAllGoodU());
  }, [id]);
  // if the user is not logged redirect to the home page
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);
  useEffect(() => {
    dispatch(titleUpdate(tutoriel.titre));
    dispatch(resumeUpdate(tutoriel.resume));
    dispatch(imageUpdate(tutoriel.image));
    dispatch(categoriesUpdate(tutoriel.categories));
    setTimeout(() => {
      dispatch(toolsUpdate(tutoriel.outils));
    }, 500);
  }, [tutoriel]);

  // ----------------------------------------------------------------------------------------------------//

  // Listen to the input title
  function inputTitleUpdate(e: any) {
    dispatch(titleUpdate(e.target.value));
  }
  // Listen to the input description
  function inputDescriptionUpdate(e: any) {
    dispatch(resumeUpdate(e.target.value));
  }
  // Add or remove category from the list
  const categoriesInput = [] as any;
  function changeInputCategoryUpdate(e: any) {
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
        "http://localhost/Apo/projet-13-brico-deco-back/public/api/image/store",
        formData
      )
      .then((res) => {
        dispatch(imageUpdate(res.data.image_link));
      });
  }
  // Add or remove tool from the list
  const toolsInput = [] as any;
  function inputToolsUpdate(e: any) {
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
    dispatch(toolsUpdate(toolsInput));
    dispatch(categoriesUpdate(categoriesInput));
    dispatch(checkFirstStep());
    if (missingValuecheck) {
      setMessage("Veuillez remplir tous les champs necessaires");
    } else {
      setMessage("");
    }
  }
  useEffect(() => {
    if (!missingValuecheck) {
      navigate("steps");
    }
  }, [missingValuecheck]);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Modifer votre tuto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Titre:
            </label>
            <div className="mt-2">
              <input
                id="titleEdit"
                name="titleEdit"
                type="text"
                defaultValue={tutoriel.titre}
                onChange={inputTitleUpdate}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="descriptionEdit"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                id="descriptionEdit"
                onChange={inputDescriptionUpdate}
                name="descriptionEdit"
                defaultValue={tutoriel.resume}
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
                    value={category.nomCategorie}
                    onChange={changeInputCategoryUpdate}
                  />
                  <label htmlFor={category.id}>{category.nomCategorie}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="imageEdit"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Ajouter votre image :
            </label>
            <input
              type="file"
              id="imageEdit"
              name="file"
              accept="image/png image/jpeg"
              onChange={uploadImage}
            />
          </div>
          <div className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
            <p className="text-left">Outils:</p>
            <div className="mt-2 flex flex-wrap">
              {tool.map((outil: any) => (
                // Utilisation de parenthèses pour délimiter le bloc d'instructions
                <div key={outil.id}>
                  <input
                    type="checkbox"
                    id={outil.id}
                    value={outil.nomDeLoutil}
                    onChange={inputToolsUpdate}
                  />
                  <label>{outil.nomDeLoutil}</label>
                </div>
              ))}
            </div>
          </div>
          <div onClick={checkInfo}>
            <Button text={"Modifier les etapes"} />
            {message && <p className="text-red-500 text-center">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

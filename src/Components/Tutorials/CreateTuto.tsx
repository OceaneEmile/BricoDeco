import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  addCategory,
  changeInputCategoriesCreate,
  changeInputDescriptionCreate,
  changeInputImageCreate,
  changeInputTitleCreate,
  changeInputToolsCreate,
  fetchTools,
  removeCategory,
  submitCreateTuto,
  uploadfileimage,
} from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateTuto() {
  // create an empty array to store the selected tools and categories
  let outilsInput = [] as any;
  let categoriesInput = [] as any;
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
  // select state from the store for checking if the tuto is created
  const tutoIsCreated = useSelector(
    (state: RootState) => state.tutoriel.tutoIsCreated
  );
  // Select state from the store for checking if the category is selected
  const categoryGood = useSelector(
    (state: RootState) => state.tutoriel.categoryGood
  );
  // when the component is mounted fetch the tools
  useEffect(() => {
    dispatch(fetchTools() as any);
  }, []);
  // Listen to the input title
  function inputTitleCreate(e: any) {
    dispatch(changeInputTitleCreate(e.target.value));
  }
  //listen to the input image
  function handleImageCreate(e: any) {
    dispatch(changeInputImageCreate(e.target.value) as any);
  }
  // Listen to the input description
  function inputDescriptionCreate(e: any) {
    dispatch(changeInputDescriptionCreate(e.target.value));
  }
  // Add or remove category from the list
  function changeInputCategoryCreate(e: any) {
    let checked = e.target.checked;
    // if the category is checked categoryGood is true
    if (checked) {
      categoriesInput.push({ id: e.target.value });
      dispatch(addCategory());
    } else {
      // if the list is empty categoryGood is false
      if (categoriesInput.length === 0) {
        dispatch(removeCategory());
      }
      // remove the category from the list
      categoriesInput = categoriesInput.filter(
        (category: any) => category.id !== e.target.value
      );
    }
  }
  // Add or remove tool from the list
  function inputToolsCreate(e: any) {
    let checked = e.target.checked;
    if (checked) {
      outilsInput.push({ id: e.target.value });
    } else {
      outilsInput = outilsInput.filter(
        (outil: any) => outil.id !== e.target.value
      );
    }
  }
  // when the form is submitted dispatch the action to create the tuto
  function submitCreate(e: any) {
    e.preventDefault();
    if (categoryGood) {
      dispatch(changeInputCategoriesCreate(categoriesInput) as any);
      dispatch(changeInputToolsCreate(outilsInput) as any);
      dispatch(submitCreateTuto() as any);
    }
  }
  //when the tuto is created redirect to the steps page
  useEffect(() => {
    tutoIsCreated && navigate("/tutoriel/create/steps");
  }, [tutoIsCreated]);
  // if the user is not logged redirect to the home page
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  const [file, setFile] = useState("") as any;

  function upload(e: any) {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("fileName", e.target.files[0].name);
    const response = axios
      .post("http:localhost/upload", formData)
      .then((res) => {
        console.log(res.data);
      });
  }
  function confirmupload() {
    const formData = new FormData();

    formData.append("file", file);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Créer votre Tuto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitCreate}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Titre:
            </label>
            <div className="mt-2">
              <input
                onChange={inputTitleCreate}
                id="title"
                name="title"
                type="title"
                placeholder=" Titre du tutoriel"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                onChange={inputDescriptionCreate}
                id="description"
                name="description"
                placeholder=" Rédigez la description de votre tutoriel ici"
                required
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  <label htmlFor={category.id}>{category.nomCategorie}</label>
                </div>
              ))}
            </div>
            {!categoryGood && (
              <p className="text-red-700">
                Veuillez selectionner une categorie minimum
              </p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={handleImageCreate}
              type="text"
              id="image"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              wfglern
            </label>
            <input type="file" id="image" name="file" onChange={upload} />
          </div>
          <div onClick={confirmupload}>
            <Button text={"Confirmer l'image"} />
          </div>

          <div className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
            <p className="text-left">Outils:</p>
            <div className="mt-2 flex flex-wrap">
              {tool.map((outil: any) => (
                <div key={outil.id}>
                  <input
                    type="checkbox"
                    id={`tool${outil.id}`}
                    value={outil.id}
                    onChange={inputToolsCreate}
                  />
                  <label htmlFor={outil.id}>{outil.nomDeLoutil}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit">
            <Button text={"Ajouter les etapes"} />
          </button>
        </form>
      </div>
    </div>
  );
}

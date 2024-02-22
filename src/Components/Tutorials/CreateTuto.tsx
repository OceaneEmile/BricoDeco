import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  changeInputCategoriesCreate,
  changeInputDescriptionCreate,
  changeInputImageCreate,
  changeInputTitleCreate,
  changeInputToolsCreate,
  fetchTools,
  submitCreateTuto,
} from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTuto() {
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  let outilsInput = [] as any;
  let categoriesInput = [] as any;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(
    (state: RootState) => state.tutoriel.categories
  );
  const tool = useSelector((state: RootState) => state.tutoriel.tools);
  const tutoIsCreated = useSelector(
    (state: RootState) => state.tutoriel.tutoIsCreated
  );

  function inputTitleCreate(e: any) {
    dispatch(changeInputTitleCreate(e.target.value));
  }
  function inputDescriptionCreate(e: any) {
    dispatch(changeInputDescriptionCreate(e.target.value));
  }
  function changeInputCategoryCreate(e: any) {
    let checked = e.target.checked;
    if (checked) {
      categoriesInput.push({ id: e.target.value });
    } else {
      categoriesInput = categoriesInput.filter(
        (category: any) => category.id !== e.target.value
      );
    }
  }
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
  useEffect(() => {
    dispatch(fetchTools() as any);
  }, []);

  function handleImageCreate(e: any) {
    dispatch(changeInputImageCreate(e.target.value) as any);
  }
  function submitCreate(e: any) {
    e.preventDefault();
    dispatch(changeInputCategoriesCreate(categoriesInput) as any);
    dispatch(changeInputToolsCreate(outilsInput) as any);
    dispatch(submitCreateTuto() as any);
  }

  useEffect(() => {
    tutoIsCreated && navigate("/tutoriel/create/steps");
  }, [tutoIsCreated]);
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Créer votre Tuto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={submitCreate}
        >
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
                // Utilisation de parenthèses pour délimiter le bloc d'instructions
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
          <div className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6">
            <p className="text-left">Outils:</p>
            <div className="mt-2 flex flex-wrap">
              {tool.map((outil: any) => (
                // Utilisation de parenthèses pour délimiter le bloc d'instructions
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

import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTools,
  fetchTutorielById,
  updateBodyTutorial,
  updateBodyTutorialSteps,
  updateCategories,
  updateContent,
  updateImage,
  updateTitle,
  updateTools,
} from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
export default function EditTuto() {
  const { id } = useParams();
  const navigate = useNavigate();
  let categoriesInput = [] as any;
  let outilsInput = [] as any;
  const tutoriel = useSelector((state: RootState) => state.tutoriel.tutoriel);
  const categories = useSelector(
    (state: RootState) => state.tutoriel.categories
  );
  const tool = useSelector((state: RootState) => state.tutoriel.tools);
  const tutoBodyIsModified = useSelector(
    (state: RootState) => state.tutoriel.tutoBodyIsModified
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTutorielById(id) as any);
    dispatch(fetchTools() as any);
  }, [id]);

  useEffect(() => {
    dispatch(updateTitle(tutoriel.titre));
    dispatch(updateContent(tutoriel.resume));
    dispatch(updateImage(tutoriel.image));
    dispatch(updateCategories(tutoriel.categories));
    setTimeout(() => {
      dispatch(updateTools(tutoriel.outils));
    }, 200);
  }, [tutoriel]);

  function changeInputCategory(e: any) {
    let checked = e.target.checked;
    if (checked) {
      categoriesInput.push({
        id: parseInt(e.target.id),
        nomCategorie: e.target.value,
        description: e.target.ariaDescription,
      });
    } else {
      categoriesInput = categoriesInput.filter(
        (category: any) => category.id !== e.target.id
      );
    }
  }
  function inputTools(e: any) {
    let checked = e.target.checked;
    if (checked) {
      outilsInput.push({
        id: parseInt(e.target.id),
        nomDeLoutil: e.target.value,
      });
    } else {
      outilsInput = outilsInput.filter(
        (outil: any) => outil.id !== e.target.id
      );
    }
  }
  function handleUpdateTitle(e: any) {
    dispatch(updateTitle(e.target.value));
  }
  function handleUpdateDescription(e: any) {
    dispatch(updateContent(e.target.value));
  }
  function handleUpdateImage(e: any) {
    dispatch(updateImage(e.target.value));
  }
  function updateBodyTuto() {
    dispatch(updateCategories(categoriesInput));
    dispatch(updateTools(outilsInput));
    dispatch(updateBodyTutorial(id) as any);
  }
  function updateBodyTutoSteps() {
    dispatch(updateCategories(categoriesInput));
    dispatch(updateTools(outilsInput));
    dispatch(updateBodyTutorialSteps(id) as any);
  }

  useEffect(() => {
    if (tutoBodyIsModified) {
      setTimeout(() => {
        navigate(`/tutoriel/${id}`);
      }, 2000);
    }
  }, [tutoBodyIsModified]);
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
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Titre:
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="title"
                defaultValue={tutoriel.titre}
                onChange={handleUpdateTitle}
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
                id="description"
                onChange={handleUpdateDescription}
                name="description"
                defaultValue={tutoriel.resume}
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
                    value={category.nomCategorie}
                    aria-description={category.description}
                    onChange={changeInputCategory}
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
              type="text"
              id="image"
              onChange={handleUpdateImage}
              defaultValue={tutoriel.image}
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
                    id={outil.id}
                    value={outil.nomDeLoutil}
                    onChange={inputTools}
                  />
                  <label>{outil.nomDeLoutil}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mr-4" onClick={updateBodyTuto}>
              <Button text={"Enregistrer"} />
            </div>
            <div onClick={updateBodyTutoSteps}>
              <Link to={`steps`}>
                <Button text={"Modifier les etapes"} />
              </Link>
            </div>
          </div>
          {tutoBodyIsModified && (
            <p className=" text-s text-green-700 text-center">
              Votre tuto a bien ete modifie
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

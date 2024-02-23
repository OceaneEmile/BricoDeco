import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  changeStep1ContentCreate,
  changeStep1ImageCreate,
  changeStep2ContentCreate,
  changeStep2ImageCreate,
  changeStep3ContentCreate,
  changeStep3ImageCreate,
  changeStep4ContentCreate,
  changeStep4ImageCreate,
  changeStep5ContentCreate,
  changeStep5ImageCreate,
  fetchTutorielById,
  isPublished,
  submitStepsCreate,
} from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTutoStep() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchTutorielById(id) as any);
  }, [id]);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const dispatch = useDispatch();
  const tutoriel = useSelector((state: RootState) => state.tutoriel.tutoriel);
  const stepIsCreated = useSelector(
    (state: RootState) => state.tutoriel.stepsCreated
  );
  const currentTutoId = useSelector(
    (state: RootState) => state.tutoriel.idCurrentTutoCreate
  );
  useEffect(() => {
    dispatch(
      changeStep1ContentCreate(tutoriel.etapes && tutoriel.etapes[0].contenu)
    ) as any;
    if (tutoriel.etapes && tutoriel.etapes[0].imageEtape) {
      dispatch(changeStep1ImageCreate(tutoriel.etapes[0].imageEtape)) as any;
    }
    if (tutoriel.etapes && tutoriel.etapes[1]) {
      dispatch(changeStep2ContentCreate(tutoriel.etapes[1].contenu)) as any;
      if (tutoriel.etapes[1].imageEtape) {
        dispatch(changeStep2ImageCreate(tutoriel.etapes[1].imageEtape)) as any;
      }
    }
    if (tutoriel.etapes && tutoriel.etapes[2]) {
      dispatch(changeStep2ContentCreate(tutoriel.etapes[2].contenu)) as any;
      if (tutoriel.etapes[1].imageEtape) {
        dispatch(changeStep2ImageCreate(tutoriel.etapes[2].imageEtape)) as any;
      }
    }
    if (tutoriel.etapes && tutoriel.etapes[3]) {
      dispatch(changeStep2ContentCreate(tutoriel.etapes[3].contenu)) as any;
      if (tutoriel.etapes[1].imageEtape) {
        dispatch(changeStep2ImageCreate(tutoriel.etapes[3].imageEtape)) as any;
      }
    }
    if (tutoriel.etapes && tutoriel.etapes[4]) {
      dispatch(changeStep2ContentCreate(tutoriel.etapes[4].contenu)) as any;
      if (tutoriel.etapes[1].imageEtape) {
        dispatch(changeStep2ImageCreate(tutoriel.etapes[4].imageEtape)) as any;
      }
    }
    dispatch(isPublished(tutoriel.estPublie)) as any;
  }, [tutoriel]);
  function inputStep1Description(e: any) {
    dispatch(changeStep1ContentCreate(e.target.value)) as any;
  }
  function inputStep2Description(e: any) {
    dispatch(changeStep2ContentCreate(e.target.value)) as any;
  }
  function inputStep3Description(e: any) {
    dispatch(changeStep3ContentCreate(e.target.value)) as any;
  }
  function inputStep4Description(e: any) {
    dispatch(changeStep4ContentCreate(e.target.value)) as any;
  }
  function inputStep5Description(e: any) {
    dispatch(changeStep5ContentCreate(e.target.value)) as any;
  }
  function inputStep1Image(e: any) {
    dispatch(changeStep1ImageCreate(e.target.value)) as any;
  }
  function inputStep2Image(e: any) {
    dispatch(changeStep2ImageCreate(e.target.value)) as any;
  }
  function inputStep3Image(e: any) {
    dispatch(changeStep3ImageCreate(e.target.value)) as any;
  }
  function inputStep4Image(e: any) {
    dispatch(changeStep4ImageCreate(e.target.value)) as any;
  }
  function inputStep5Image(e: any) {
    dispatch(changeStep5ImageCreate(e.target.value)) as any;
  }
  function submitSteps(e: any) {
    e.preventDefault();
    dispatch(submitStepsCreate() as any);
  }
  useEffect(() => {
    if (stepIsCreated || currentTutoId === 0) {
      setTimeout(() => {
        navigate(`/tutoriel/${id}`);
      }, 2000);
    }
  }, [stepIsCreated]);
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Modifier vos étapes
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitSteps}>
          <div>
            <p className="text-left">Etape 1:</p>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                onChange={inputStep1Description}
                id="descriptionstep1edit"
                name="descriptionstep1edit"
                defaultValue={tutoriel.etapes && tutoriel.etapes[0].contenu}
                required
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep1Image}
              type="text"
              defaultValue={
                tutoriel.etapes && tutoriel.etapes[0].imageEtape
                  ? tutoriel.etapes[0].imageEtape
                  : ""
              }
              id="imagestep1edit"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <p className="text-left">Etape 2:</p>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                onChange={inputStep2Description}
                id="descriptionstep2edit"
                name="descriptionstep2edit"
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[1]
                    ? tutoriel.etapes[1].contenu
                    : ""
                }
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep2Image}
              defaultValue={
                tutoriel.etapes &&
                tutoriel.etapes[1] &&
                tutoriel.etapes[1].imageEtape
                  ? tutoriel.etapes[1].imageEtape
                  : ""
              }
              type="text"
              id="imagestep2edit"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <p className="text-left">Etape 3:</p>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                onChange={inputStep3Description}
                id="descriptionstep3edit"
                name="descriptionstep3edit"
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[2]
                    ? tutoriel.etapes[2].contenu
                    : ""
                }
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep3Image}
              defaultValue={
                tutoriel.etapes &&
                tutoriel.etapes[2] &&
                tutoriel.etapes[2].imageEtape
                  ? tutoriel.etapes[2].imageEtape
                  : ""
              }
              type="text"
              id="imagestep3edit"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <p className="text-left">Etape 4:</p>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                onChange={inputStep4Description}
                id="descriptionstep4edit"
                name="descriptionstep4edit"
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[3]
                    ? tutoriel.etapes[3].contenu
                    : ""
                }
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep4Image}
              defaultValue={
                tutoriel.etapes &&
                tutoriel.etapes[3] &&
                tutoriel.etapes[3].imageEtape
                  ? tutoriel.etapes[3].imageEtape
                  : ""
              }
              type="text"
              id="imagestep4edit"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <p className="text-left">Etape 5:</p>
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                onChange={inputStep5Description}
                id="descriptionstep5edit"
                name="descriptionstep5edit"
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[4]
                    ? tutoriel.etapes[3].contenu
                    : ""
                }
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep5Image}
              defaultValue={
                tutoriel.etapes &&
                tutoriel.etapes[4] &&
                tutoriel.etapes[4].imageEtape
                  ? tutoriel.etapes[4].imageEtape
                  : ""
              }
              type="text"
              id="image"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button type="submit">
            <Button text={"Modifier"} />
          </button>
          {stepIsCreated && (
            <p className="text-center text-green-700">
              Les etapes ont bien ete modifie
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

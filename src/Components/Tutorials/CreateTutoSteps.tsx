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
  publication,
  submitStepsCreate,
} from "../../store/reducer/tutoriel";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useEffect } from "react";

export default function CreateTutoSteps() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stepIsCreated = useSelector(
    (state: RootState) => state.tutoriel.stepsCreated
  );
  const currentTutoId = useSelector(
    (state: RootState) => state.tutoriel.idCurrentTutoCreate
  );
  const createdSuccessfull = useSelector(
    (state: RootState) => state.tutoriel.createdSuccessful
  );
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
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
  function handlepublication() {
    dispatch(publication() as any);
  }
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Créer vos étapes
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
                id="descriptionstep1"
                name="descriptionstep1"
                placeholder="Cette etape est la seule etape obligatoire pour la publication de votre tutoriel. Rédigez la description de votre etape ici."
                required
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              id="imagestep1"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                id="descriptionstep2"
                name="descriptionstep2"
                placeholder=" Rédigez la description de votre etape ici"
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep2Image}
              type="text"
              id="imagestep2"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                id="descriptionstep3"
                name="descriptionstep3"
                placeholder=" Rédigez la description de votre etape ici"
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep3Image}
              type="text"
              id="imagestep3"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                id="descriptionstep4"
                name="descriptionstep4"
                placeholder=" Rédigez la description de votre etape ici"
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep4Image}
              type="text"
              id="imagestep4"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                id="descriptionstep5"
                name="descriptionstep5"
                placeholder=" Rédigez la description de votre etape ici"
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter un lien de l'image :
            </label>
            <input
              onChange={inputStep5Image}
              type="text"
              id="imagestep5"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button type="submit">
            <Button text={"Enregistrer"} />
          </button>
          <button type="submit" onClick={handlepublication}>
            <Button text={"Publier"} />
          </button>
        </form>
        {createdSuccessfull && (
          <p className="text-green-700">Merci pour votre contribution</p>
        )}
      </div>
    </div>
  );
}

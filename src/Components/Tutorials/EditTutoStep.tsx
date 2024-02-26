import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import {
  checkSecondStep,
  fifthStepContent,
  fifthStepImage,
  firstStepContent,
  firstStepImage,
  fourthStepContent,
  fourthStepImage,
  idTuto,
  publicationTuto,
  registerTuto,
  secondStepContent,
  secondStepImage,
  thirdStepContent,
  thirdStepImage,
  updateTutoriel,
  userTuto,
} from "../../store/reducer/tutorielUpdate";
import axios from "axios";
import { fetchTutorielById, findIdTuto } from "../../store/reducer/tutoriel";
// ---------------------------------------------------------------------------//
export default function CreateTutoSteps() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams() as any;
  const tutoriel = useSelector((state: RootState) => state.tutoriel.tutoriel);
  const missingValue = useSelector(
    (state: RootState) => state.tutorielUpdate.missingValue
  );
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const allGood = useSelector(
    (state: RootState) => state.tutorielUpdate.allGoodU
  );
  useEffect(() => {
    dispatch(fetchTutorielById() as any);
    dispatch(idTuto(id));
    dispatch(userTuto(tutoriel.utilisateur));
  }, []);

  useEffect(() => {
    dispatch(findIdTuto(id) as any);
  }, [id]);

  function inputStep1Description(e: any) {
    dispatch(firstStepContent(e.target.value));
  }
  function inputStep2Description(e: any) {
    dispatch(secondStepContent(e.target.value));
  }
  function inputStep3Description(e: any) {
    dispatch(thirdStepContent(e.target.value));
  }
  function inputStep4Description(e: any) {
    dispatch(fourthStepContent(e.target.value));
  }
  function inputStep5Description(e: any) {
    dispatch(fifthStepContent(e.target.value));
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
        if (e.target.id === "1") {
          dispatch(firstStepImage(res.data.image_link)) as any;
        }
        if (e.target.id === "2") {
          dispatch(secondStepImage(res.data.image_link)) as any;
        }
        if (e.target.id === "3") {
          dispatch(thirdStepImage(res.data.image_link)) as any;
        }
        if (e.target.id === "4") {
          dispatch(fourthStepImage(res.data.image_link)) as any;
        }
        if (e.target.id === "5") {
          dispatch(fifthStepImage(res.data.image_link)) as any;
        }
      });
  }
  function register() {
    dispatch(registerTuto() as any);
    dispatch(checkSecondStep());
    if (!missingValue) {
      dispatch(updateTutoriel() as any);
    }
  }
  function publication() {
    dispatch(publicationTuto() as any);
    dispatch(checkSecondStep());
    if (!missingValue) {
      dispatch(updateTutoriel() as any);
    }
  }

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  const [message, setMessage] = useState("");
  useEffect(() => {
    if (allGood) {
      setMessage("Votre tutoriel a bien été enregistré");
      setTimeout(() => {
        navigate(`/tutoriel/${id}`);
      }, 2000);
    }
  }, [allGood]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Editer Etapes
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
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
                defaultValue={tutoriel.etapes && tutoriel.etapes[0].contenu}
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
              Ajouter votre image :
            </label>
            <input
              type="file"
              id="1"
              name="file"
              accept="image/png image/jpeg"
              onChange={uploadImage}
            />
          </div>
          {/* --------------------------------------------------------------------- */}
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
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[1]
                    ? tutoriel.etapes[1].contenu
                    : ""
                }
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter votre image :
            </label>
            <input
              type="file"
              id="2"
              name="file"
              accept="image/png image/jpeg"
              onChange={uploadImage}
            />
          </div>
          {/* ----------------------------------------------------------------------------- */}
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
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[2]
                    ? tutoriel.etapes[2].contenu
                    : ""
                }
                placeholder=" Rédigez la description de votre etape ici"
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter votre image :
            </label>
            <input
              type="file"
              id="3"
              name="file"
              accept="image/png image/jpeg"
              onChange={uploadImage}
            />
          </div>
          {/* -------------------------------------------------------------------------------------- */}
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
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[3]
                    ? tutoriel.etapes[3].contenu
                    : ""
                }
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter votre image :
            </label>
            <input
              type="file"
              id="4"
              name="file"
              accept="image/png image/jpeg"
              onChange={uploadImage}
            />
          </div>
          {/* ----------------------------------------------------------------- */}
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
                defaultValue={
                  tutoriel.etapes && tutoriel.etapes[4]
                    ? tutoriel.etapes[3].contenu
                    : ""
                }
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Ajouter votre image :
            </label>
            <input
              type="file"
              id="5"
              name="file"
              accept="image/png image/jpeg"
              onChange={uploadImage}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="p-4" onClick={register}>
              <Button text={"Enregistrer"} />
            </div>
            <div className="p-4" onClick={publication}>
              <Button text={"Publier"} />
            </div>
          </div>
        </form>
        {message && <p className="text-green-700">{message}</p>}
      </div>
    </div>
  );
}

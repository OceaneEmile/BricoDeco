import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInputConfirmPasswordSubscribe,
  changeInputMailSubscribe,
  changeInputPasswordSubscribe,
  changeInputUsernameSubscribe,
  resetCreate,
  subscribeUser,
} from "../../store/reducer/user";
import { RootState } from "../../store";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Subscribe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordIsGood = useSelector(
    (state: RootState) => state.user.passwordIsGood
  );
  const passwordFormatGood = useSelector(
    (state: RootState) => state.user.passwordFormatGood
  );
  const emailFormatGood = useSelector(
    (state: RootState) => state.user.emailFormatGood
  );
  const usernameFormatGood = useSelector(
    (state: RootState) => state.user.usernameFormatGood
  );
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const createOk = useSelector((state: RootState) => state.user.createOk);

  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputUsernameSubscribe(e.target.value));
  }

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputMailSubscribe(e.target.value));
  }

  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputPasswordSubscribe(e.target.value));
  }

  function handleConfirmPasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputConfirmPasswordSubscribe(e.target.value));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (
      passwordIsGood &&
      passwordFormatGood &&
      emailFormatGood &&
      usernameFormatGood
    ) {
      dispatch(subscribeUser() as any);
    }
  }
  useEffect(() => {
    isLogged && navigate("/");
  }, [isLogged]);
  useEffect(() => {
    if (createOk) {
      setTimeout(() => {
        navigate("/");
        dispatch(resetCreate());
      }, 2000);
    }
  }, [createOk]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Créer un compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Pseudo:
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameInput}
                id="name"
                name="name"
                type="text"
                autoComplete="username"
                required
                placeholder="Pseudo"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {!usernameFormatGood && (
                <p className="text-xs text-red-700">
                  Le pseudo doit contenir au moins 3 caractères.
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="emailsubscribe"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Email:
            </label>
            <div className="mt-2">
              <input
                onChange={handleEmailInput}
                id="emailsubscribe"
                name="emailsuscribe"
                type="email"
                required
                placeholder="Email"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {!emailFormatGood && (
                <p className="text-xs text-red-700">
                  Veuillez entrer une adresse email valide.
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="passwordsubscribe"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Mot de passe:
            </label>
            <div className="mt-2">
              <input
                onChange={handlePasswordInput}
                id="passwordsubscribe"
                name="passwordsubscribe"
                type="password"
                required
                placeholder="Mot de passe"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {!passwordFormatGood && (
                <p className="text-xs text-red-700">
                  Le mot de passe doit contenir au moins 14 caractères, une
                  majuscule, une minuscule et un chiffre.
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Confirmez le mot de passe:
            </label>
            <div className="mt-2">
              <input
                onChange={handleConfirmPasswordInput}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirmez le mot de passe"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {!passwordIsGood && (
                <p className="text-xs text-red-700">
                  Veuillez confirmer le meme mot de passe.
                </p>
              )}
            </div>
          </div>

          <div>
            <button type="submit">
              <Button text={"Creer un compte"} />
            </button>
            {createOk && (
              <p className="text-xs text-green-700">
                Votre compte a bien été créé. Vous pouvez maintenant vous
                connecter.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  changeInputMailSubscribe,
  changeInputPasswordSubscribe,
  changeInputUsernameSubscribe,
  subscribeUser,
} from "../../store/reducer/user";

export default function Subscribe() {
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputUsernameSubscribe(e.target.value));
  }

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputMailSubscribe(e.target.value));
  }

  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserPassword(e.currentTarget.value);
  }

  function handleConfirmPasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value === userPassword) {
      dispatch(changeInputPasswordSubscribe(e.target.value));
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Formulaire ok !");
    dispatch(subscribeUser() as any);
  }

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
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Email:
            </label>
            <div className="mt-2">
              <input
                onChange={handleEmailInput}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Mot de passe:
            </label>
            <div className="mt-2">
              <input
                onChange={handlePasswordInput}
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Mot de passe"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
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
                autoComplete="new-password"
                required
                placeholder="Confirmez le mot de passe"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button type="submit">Créer un compte</button>
          </div>
        </form>
      </div>
    </div>
  );
}

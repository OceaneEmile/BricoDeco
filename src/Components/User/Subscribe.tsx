import React, { useState } from "react";
import Button from "../Button/Button";

export default function Subscribe() {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Creer un compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="emailregister"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Email:
            </label>
            <div className="mt-2">
              <input
                id="emailregister"
                name="emailregister"
                type="email"
                autoComplete="email"
                required
                placeholder=" Email"
                className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="passwordregister"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Mot de passe:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="passwordregister"
                name="passwordregister"
                type="password"
                placeholder="Mot de passe"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Confirmez votre mot de passe:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="Mot de passe"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Button text={"Créer un compte"} />
          </div>
        </form>
      </div>
    </div>
  );
}

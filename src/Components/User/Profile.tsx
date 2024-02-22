import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  changeInputConfirmPasswordSubscribe,
  changeInputPasswordSubscribe,
  changeInputUsernameSubscribe,
  changePassword,
  changeUsername,
} from "../../store/reducer/user";
import { RootState } from "../../store";
import UserGallery from "./UserGallery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profil() {
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputUsernameSubscribe(e.target.value));
  }
  function handleConfirmPasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputConfirmPasswordSubscribe(e.target.value));
  }
  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputPasswordSubscribe(e.target.value));
  }
  function submitUser() {
    if (usernameFormatGood) {
      dispatch(changeUsername() as any);
    }
  }
  function submitNewPassword() {
    if (passwordIsGood && passwordFormatGood) {
      dispatch(changePassword() as any);
    }
  }
  const usernameFormatGood = useSelector(
    (state: RootState) => state.user.usernameFormatGood
  );
  const passwordIsGood = useSelector(
    (state: RootState) => state.user.passwordIsGood
  );
  const passwordFormatGood = useSelector(
    (state: RootState) => state.user.passwordFormatGood
  );
  const usernameModified = useSelector(
    (state: RootState) => state.user.usernameModified
  );
  const passwordModified = useSelector(
    (state: RootState) => state.user.passwordModified
  );
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged]);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
            Votre profil
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Pseudonyme:
              </label>
              {!usernameFormatGood && (
                <p className="text-xs text-red-700">
                  Le pseudo doit contenir au moins 3 caractères.
                </p>
              )}
              <div className="mt-2">
                <input
                  onChange={handleNameInput}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Votre nouveau pseudonyme"
                  className=" mb-4 block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div onClick={submitUser}>
                <Button text={"Modifier"} />
              </div>
              {usernameModified && (
                <p className="text-green-700">
                  Votre pseudonyme a bien été modifié
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              {!passwordFormatGood && (
                <p className="text-xs text-red-700">
                  Le mot de passe doit contenir au moins 10 caractères, une
                  majuscule, une minuscule et un chiffre.
                </p>
              )}
              <div className="mt-2">
                <input
                  onChange={handlePasswordInput}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Entrez votre nouveau le mot de passe"
                  required
                  className=" mb-4 block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Confirmez le mot de passe:
                </label>
                <div className="mt-2">
                  {!passwordIsGood && (
                    <p className="text-xs text-red-700">
                      Veuillez confirmer le meme mot de passe.
                    </p>
                  )}
                  <input
                    onChange={handleConfirmPasswordInput}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="Confirmez le mot de passe"
                    className="mb-4 block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div onClick={submitNewPassword}>
                <Button text={"Modifier le mot de passe"} />
              </div>
              {passwordModified && (
                <p className="text-green-700">
                  Votre mot de passe a bien été modifié
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <UserGallery text={"Vos tutos"} />
    </>
  );
}

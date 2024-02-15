import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  closeConnexionForm,
  changeInputMail,
  changeInputPassword,
  sendUser,
  fetchUser,
} from "../../store/reducer/user";
import { useEffect } from "react";

export default function ConnexionForm() {
  const dispatch = useDispatch();

  const connexionFormIsOpen = useSelector(
    (state: RootState) => state.user.connexionFormIsOpen
  );
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  // Close modal
  function handleClick(): void {
    dispatch(closeConnexionForm());
  }
  // listen input
  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputMail(e.target.value));
  }
  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeInputPassword(e.target.value));
  }

  // Post user  infos for connexion
  const sendConnexionRequest = () => {
    dispatch(sendUser() as any);
  };

  useEffect(() => {
    if (isLogged) {
      dispatch(fetchUser() as any);
    }
  }, [isLogged]);

  return (
    <div
      className={
        connexionFormIsOpen
          ? "border-4 border-blue-900 absolute z-20 bg-white top-60 right-2 p-20 sm:top-2 sm:p-16"
          : "hidden"
      }
    >
      <div className="absolute top-2 right-2 border p-2" onClick={handleClick}>
        x
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connectez vous
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  onChange={handleEmailInput}
                  id="email"
                  name="email"
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
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handlePasswordInput}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Mot de passe"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div onClick={sendConnexionRequest}>
              <Button text={"Se connecter"} />
            </div>
            <Link to="subscribe">
              <div onClick={handleClick}>
                <Button text={"Créer un compte"} />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

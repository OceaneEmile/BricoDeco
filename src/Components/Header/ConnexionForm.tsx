import { useRef, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ConnexionForm({ isOpen, setIsOpen }: Props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Close modal
  function handleClick(): void {
    setIsOpen(false);
  }
  // listen input
  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserEmail(e.currentTarget.value);
  }
  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserPassword(e.currentTarget.value);
  }

  // Post user  infos for connexion
  function sendConnexionRequest() {
    const postUserInfos = async () => {
      try {
        const response = await axios.post(
          "http://kim-pham.vpnuser.lan/APO/projet-13-brico-deco-back/public/api/login_check",
          {
            username: userEmail,
            password: userPassword,
          }
        );
        setIsOpen(false);
        localStorage.setItem("auth", response.data.token);
        // fournir un token refaire requete pour avoir les infos de l'utilisateur
      } catch (error) {
        console.error(error);
      }
    };

    postUserInfos();
  }

  return (
    <div
      className={
        isOpen
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

import LoginComponent from "./LoginComponent";
import Navbar from "./Navbar";
import Logo from "../../assets/logowhitoutbg.png";
import ConnexionForm from "./ConnexionForm";
import { useState } from "react";

export default function Header() {
  // declare a state to handle the connexion form
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" pt-2 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <img src={Logo} alt="" className="w-32" />
        <div>
          <h1 className="text-6xl font-bold text-center">Bric'O Déc'O</h1>
          <p className="text-center text-xl">
            Le tuto qu'il vous faut et votre interieur fait le show
          </p>
        </div>
        <LoginComponent setIsOpen={setIsOpen} />
        <ConnexionForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Navbar />
    </div>
  );
}

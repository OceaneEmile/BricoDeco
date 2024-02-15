import LoginComponent from "./LoginComponent";
import Navbar from "./Navbar";
import Logo from "../../assets/logowhitoutbg.png";
import ConnexionForm from "./ConnexionForm";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" pt-2 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-32" />
        </Link>
        <div>
          <h1 className="text-6xl font-bold text-center text-blue-900">
            Bric'O Déc'O
          </h1>
          <p className="text-center text-xl text-red-400">
            Le tuto qu'il vous faut et votre interieur fait le show !
          </p>
        </div>

        <LoginComponent />

        <ConnexionForm />
      </div>
      <Navbar />
    </div>
  );
}

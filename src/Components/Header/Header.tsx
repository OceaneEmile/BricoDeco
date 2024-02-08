import LoginComponent from "./LoginComponent";
import Navbar from "./Navbar";
import Logo from "../../assets/logowhitoutbg.png";

export default function Header() {
  return (
    <div className=" pt-2 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <img src={Logo} alt="" className="w-32" />
        <div>
          <h1 className="text-6xl font-bold text-center">Bric'O Déc'O</h1>
          <p>un tuto pour les gouverner tous</p>
        </div>
        <LoginComponent />
      </div>
      <Navbar />
    </div>
  );
}

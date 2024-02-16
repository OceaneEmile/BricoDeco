import LoginComponent from "./LoginComponent";
import Navbar from "./Navbar";
import Logo from "../../assets/logowhitoutbg.png";
import ConnexionForm from "./ConnexionForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkCookies, fetchUser } from "../../store/reducer/user";
import { RootState } from "../../store";

export default function Header() {
  const dispatch = useDispatch();
  const cookieIsTrue = useSelector(
    (state: RootState) => state.user.cookiesTokenIsTrue
  );

  useEffect(() => {
    dispatch(checkCookies());
  }, []);
  useEffect(() => {
    if (cookieIsTrue) {
      dispatch(fetchUser() as any);
    }
  }, [cookieIsTrue]);
  return (
    <div className=" pt-2 bg-white bg-opacity-80">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-32" />
        </Link>
        <div>
          <h1 className="text-6xl font-bold text-center text-blue-900 tracking-widest">
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

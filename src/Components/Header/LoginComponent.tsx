import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, openConnexionForm } from "../../store/reducer/user";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

export default function LoginComponent() {
  const dispatch = useDispatch();

  // function to handle the click on the connexion component
  function handleClick(): void {
    dispatch(openConnexionForm());
  }
  function handlelogout(): void {
    dispatch(logout());
  }
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const user: any = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <div className={isLogged ? "hidden" : "mx-6 mt-6"} onClick={handleClick}>
        <Button text={"Connectez vous"} />
      </div>
      <div className={!isLogged ? "hidden" : "mx-6 mt-6"}>
        <p className="text-center">{user.pseudonyme}</p>
        <Link to={"profil"}>
          <Button text={"Profil"} />
        </Link>
        <div onClick={handlelogout}>
          <Button text={"Deconnectez vous"} />
        </div>
      </div>
    </>
  );
}

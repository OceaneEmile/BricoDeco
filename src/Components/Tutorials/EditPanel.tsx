import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function EditPanel() {
  const user = useSelector((state: RootState) => state.user.user);
  const tutoriel = useSelector((state: RootState) => state.tutoriel.tutoriel);

  return (
    <div className="flex ">
      <Link to="tutoriel/edit">
        <Button text={"Editer le tuto"} />
      </Link>
      <Button text={"Supprimer le tuto"} />
    </div>
  );
}

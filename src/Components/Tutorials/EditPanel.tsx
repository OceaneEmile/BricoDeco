import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function EditPanel() {
  return (
    <div className="flex ">
      <Link to="tutoriel/edit">
        <Button text={"Editer le tuto"} />
      </Link>
      <Button text={"Supprimer le tuto"} />
    </div>
  );
}

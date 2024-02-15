import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Button from "../Button/Button";

export default function EditPanel() {
  const user = useSelector((state: RootState) => state.user.user);
  const tutoriel = useSelector((state: RootState) => state.tutoriel.tutoriel);

  return (
    <div className="flex ">
      <Button text={"Editer le tuto"} />
      <Button text={"Supprimer le tuto"} />
    </div>
  );
}

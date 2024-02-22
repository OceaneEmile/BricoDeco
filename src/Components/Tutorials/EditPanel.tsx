import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteTutorial, resetDeleted } from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { useEffect } from "react";

export default function EditPanel() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteState = useSelector((state: RootState) => state.tutoriel.deleted);
  function deleted() {
    dispatch(deleteTutorial(id) as any);
  }

  useEffect(() => {
    setTimeout(() => {
      if (deleteState) {
        dispatch(resetDeleted() as any);
        navigate("/");
      }
    }, 2000);
  }, [deleteState]);

  return (
    <div className="flex ">
      <Link to={`tutoriel/edit`}>
        <Button text={"Editer le tuto"} />
      </Link>
      <div onClick={deleted}>
        <Button text={"Supprimer le tuto"} />
        {deleteState && (
          <p className="text-green-700">Le tutoriel a bien été supprimé</p>
        )}
      </div>
    </div>
  );
}

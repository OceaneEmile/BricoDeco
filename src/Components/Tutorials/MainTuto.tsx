import { useParams } from "react-router-dom";
import MainTutoDetail from "./MainTutoDetail";
import Step from "./Step";
import ToolsList from "./ToolsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchTutorielById } from "../../store/reducer/tutoriel";
import { Tutos } from "../../types/types";

export default function MainTuto() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tutoriel = useSelector(
    (state: RootState) => state.tutoriel.tutoriel as Tutos
  );

  useEffect(() => {
    dispatch(fetchTutorielById(id) as any);
  }, [id]);

  return (
    <div>
      <MainTutoDetail tutoriel={tutoriel} />
      <div className="flex flex-col sm:flex-row ">
        <ToolsList tools={tutoriel.outils} />
        <Step steps={tutoriel.etapes} />
      </div>
    </div>
  );
}

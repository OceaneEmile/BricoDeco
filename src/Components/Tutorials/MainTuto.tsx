import { useParams } from "react-router-dom";
import MainTutoDetail from "./MainTutoDetail";
import Step from "./Step";
import ToolsList from "./ToolsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Tutos } from "../../types/types";
import detailTuto from "../../detailTuto";

export default function MainTuto() {
  const { id } = useParams();
  const [tutoriel, setTutoriel] = useState<Tutos[]>([]);

  const fetchTuto = async () => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("auth")}`;

      const response = await axios.get(
        `http://kim-pham.vpnuser.lan/APO/projet-13-brico-deco-back/public/api/tutoriels/${id}`
      );
      setTutoriel(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTutoriel(detailTuto);
    // fetchTuto();
  }, [id]);

  return (
    <div>
      <MainTutoDetail tutoriel={tutoriel} />
      <div className="flex flex-col sm:flex-row ">
        <ToolsList />
        <Step />
      </div>
    </div>
  );
}

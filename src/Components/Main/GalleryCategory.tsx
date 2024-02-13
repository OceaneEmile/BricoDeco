import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import Button from "../Button/Button";
import axios from "axios";
import detailCategory from "../../detailCategory";
import { useEffect, useState } from "react";

export default function GalleryCategory() {
  const [tutoriels, setTutoriels] = useState([]);
  const { id } = useParams();

  const fetchTutosByCategory = async () => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("auth")}`;

      const response = await axios.get(
        `http://kim-pham.vpnuser.lan/APO/projet-13-brico-deco-back/public/api/categorie/${id}/tutoriels`
      );
      setTutoriels(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // fetchTutosByCategory()
    setTutoriels(detailCategory);
  }, [id]);

  return (
    <div className="py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left">
            Les Derniers Tutos :
          </h3>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-10 sm:mt-4 sm:pt-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {/* for each tuto create card */}
          {tutoriels
            ? tutoriels.map((tutoriel) => (
                <Link key={tutoriel.id} to={`tutoriel/${tutoriel.id}`}>
                  <Card tutoriel={tutoriel} />
                </Link>
              ))
            : ""}
        </div>
        <div className="mt-10">
          <Button text="Voir plus" />
        </div>
      </div>
    </div>
  );
}

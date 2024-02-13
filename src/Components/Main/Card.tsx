import { Tutos } from "../../types/types";
import Categorybadge from "../Button/Categorybadge";

interface Props {
  tutoriel: Tutos;
}
export default function Card({ tutoriel }: Props) {
  return (
    <div className="max-w-sm border border-solid border-blue-900 p-5 infoCard cursor-pointer">
      <img className="max-w" src={tutoriel.image} alt="" />
      <p className="text-center font-bold text-lg">{tutoriel.titre}</p>
      {tutoriel.categories.map((categorie) => (
        <Categorybadge key={categorie.id} categorie={categorie} />
      ))}
      <div className=" flex justify-between invisible infoCard">
        <p className="text-gray-500">Jason Durouleau</p>
        <p className="text-gray-500">06/02/1963</p>
      </div>
    </div>
  );
}

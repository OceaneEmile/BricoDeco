import { Tutos } from "../../types/types";
import Categorybadge from "../Button/Categorybadge";

interface Props {
  tutoriel: Tutos;
}
export default function Card({ tutoriel }: Props) {
  const transformDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };
  const date = transformDate(tutoriel.datePublication);

  return (
    <div className="max-w-sm h-full border border-solid border-blue-900 p-5 infoCard cursor-pointer bg-white">
      <img className="max-w h-48 w-64 mx-auto" src={tutoriel.image} alt="" />
      <h4 className="text-center font-bold text-lg">{tutoriel.titre}</h4>
      <div className="flex justify-center flex-wrap ">
        {tutoriel.categories.map((categorie) => (
          <Categorybadge key={categorie.id} categorie={categorie} />
        ))}
      </div>
      <div className=" flex justify-between invisible infoCard flex-wrap">
        <p className="text-gray-500">{tutoriel.utilisateur.pseudonyme}</p>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
}

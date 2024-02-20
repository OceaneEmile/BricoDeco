import { Tutos } from "../../types/types";
import CategorybadgeCaroussel from "../Button/CategoryBadgeCaroussel";

interface Props {
  randomTuto: Tutos;
}
export default function CardCaroussel({ randomTuto }: Props) {
  const transformDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };
  const date = transformDate(randomTuto.datePublication);
  return (
    <div className="max-w-sm border border-solid border-blue-900 p-5 infoCard cursor-pointer bg-white">
      <img className="max-w h-56 w-80" src={randomTuto.image} alt="" />
      <h4 className="text-center font-bold text-lg">{randomTuto.titre}</h4>
      <div className="flex justify-center gap-2">
        {randomTuto.categories.map((category) => (
          <CategorybadgeCaroussel key={category.id} category={category} />
        ))}
      </div>

      <div className=" flex justify-between invisible infoCard">
        <p className="text-gray-500">{randomTuto.utilisateur.pseudonyme}</p>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
}

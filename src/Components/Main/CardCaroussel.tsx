import { Tutos } from "../../types/types";
import CategorybadgeCaroussel from "../Button/CategoryBadgeCaroussel";

interface Props {
  randomTuto: Tutos;
}
export default function CardCaroussel({ randomTuto }: Props) {
  return (
    <div className="max-w-sm border border-solid border-blue-900 p-5 infoCard cursor-pointer">
      <img className="max-w" src={randomTuto.image} alt="" />
      <p className="text-center font-bold text-lg">{randomTuto.titre}</p>
      <div className="flex justify-center gap-2">
        {randomTuto.categories.map((category) => (
          <CategorybadgeCaroussel key={category.id} category={category} />
        ))}
      </div>

      <div className=" flex justify-between invisible infoCard">
        <p className="text-gray-500">{randomTuto.utilisateur.pseudonyme}</p>
        <p className="text-gray-500">{randomTuto.datePublication}</p>
      </div>
    </div>
  );
}

import { Categories } from "../../types/types";

interface Props {
  isOpen: boolean;
  category: Categories[];
}

export default function DropDown({ isOpen, category }: Props) {
  return (
    <div
      // if the burger menu is active, display the dropdown menu
      className={
        isOpen
          ? " absolute w-full border-t border-4 border-gray-300 p-3 flex justify-end sm:justify-between bg-white sm:hidden"
          : "hidden"
      }
    >
      <ul className=" sm:flex justify-evenly grow">
        <li>Accueil</li>
        {/* For each category create li*/}
        {category.map((category) => (
          <li key={category.id}>{category.nomCategorie}</li>
        ))}
        <li>Ajoutez votre tuto</li>
      </ul>
    </div>
  );
}

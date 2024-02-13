import { Link } from "react-router-dom";
import { Categories } from "../../types/types";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  category: Categories[];
}

export default function DropDown({ isOpen, category, setIsOpen }: Props) {
  return (
    <div
      // if the burger menu is active, display the dropdown menu
      className={
        isOpen
          ? " absolute w-full border-t border-4 border-blue-900 p-3 flex justify-end sm:justify-between bg-white sm:hidden"
          : "hidden"
      }
    >
      <ul className=" sm:flex justify-evenly grow">
        <Link
          to={"/"}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li>Accueil</li>
        </Link>

        {/* For each category create li */}
        {category.map((category: Categories) => (
          <Link
            key={category.id}
            to={`categorie/${category.id}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <li>{category.nomCategorie}</li>
          </Link>
        ))}
        {/*link to create tutorial */}
        <Link
          to={"tutoriel/create"}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <li>Ajoutez votre tutoriel</li>
        </Link>
      </ul>
    </div>
  );
}

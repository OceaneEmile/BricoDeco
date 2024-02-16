import { Link } from "react-router-dom";
import { Categories } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openMenuBurger } from "../../store/reducer/tutoriel";

interface Props {
  category: Categories[];
}

export default function DropDown({ category }: Props) {
  const menuIsOpen = useSelector(
    (state: RootState) => state.tutoriel.menuBurgerIsOpen
  );
  const dispatch = useDispatch();
  function handleClick(): void {
    dispatch(openMenuBurger());
  }

  return (
    <div
      // if the burger menu is active, display the dropdown menu
      className={
        menuIsOpen
          ? " absolute w-full border-t border-4 border-blue-900 p-3 flex justify-end sm:justify-between bg-white sm:hidden"
          : "hidden"
      }
    >
      <ul className=" sm:flex justify-evenly grow">
        <Link to={"/"} onClick={handleClick}>
          <li>Accueil</li>
        </Link>

        {/* For each category create li */}
        {category.map((category: Categories) => (
          <Link
            key={category.id}
            to={`categorie/${category.id}`}
            onClick={handleClick}
          >
            <li>{category.nomCategorie}</li>
          </Link>
        ))}
        {/*link to create tutorial */}
        <Link to={"tutoriel/create"} onClick={handleClick}>
          <li>Ajoutez votre tutoriel</li>
        </Link>
      </ul>
    </div>
  );
}

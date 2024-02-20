import { Link, NavLink } from "react-router-dom";
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
          ? " absolute w-full border-t border-4 border-blue-900 p-3 flex justify-end sm:justify-between bg-white sm:hidden z-50"
          : "hidden"
      }
    >
      <ul className=" sm:flex justify-evenly grow">
        <NavLink
          to={"/"}
          onClick={handleClick}
          style={({ isActive }) => {
            return {
              color: isActive ? "coral" : "",
            };
          }}
        >
          <li>Accueil</li>
        </NavLink>

        {/* For each category create li */}
        {category.map((category: Categories) => (
          <NavLink
            key={category.id}
            to={`categorie/${category.id}`}
            style={({ isActive }) => {
              return {
                color: isActive ? "coral" : "",
              };
            }}
            onClick={handleClick}
          >
            <li>{category.nomCategorie}</li>
          </NavLink>
        ))}
        {/*link to create tutorial */}
        <NavLink
          to={"tutoriel/create"}
          onClick={handleClick}
          style={({ isActive }) => {
            return {
              color: isActive ? "coral" : "",
            };
          }}
        >
          <li>Ajoutez votre tutoriel</li>
        </NavLink>
      </ul>
    </div>
  );
}

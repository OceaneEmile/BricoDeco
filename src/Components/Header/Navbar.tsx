import DropDown from "./DropDown";
import { Link, NavLink } from "react-router-dom";
import { Categories } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, openMenuBurger } from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { useEffect } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(
    (state: RootState) => state.tutoriel.menuBurgerIsOpen
  );
  const category = useSelector((state: RootState) => state.tutoriel.categories);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  // function to handle the click on the burger menu
  function handleClick(): void {
    dispatch(openMenuBurger());
  }
  // restrict the fetch to the first render
  useEffect(() => {
    dispatch(fetchCategory() as any);
  }, []);

  return (
    <>
      <div className="border-t border-b border-blue-900 p-3 flex justify-end sm:justify-between">
        <ul className="hidden sm:flex justify-evenly items-center text-blue-900 grow">
          {/*link to Home */}
          <NavLink
            to={"/"}
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
            >
              <li>{category.nomCategorie}</li>
            </NavLink>
          ))}
          {/*link to create tutorial */}
          <Link to={"tutoriel/create"}>
            <li
              className={
                isLogged
                  ? "text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800text-white p-2 rounded-md"
                  : "hidden"
              }
            >
              Ajoutez votre tutoriel
            </li>
          </Link>
        </ul>
        <div className="sm:hidden" onClick={handleClick}>
          {/* switch icon if menu burger is active or not */}
          {menuIsOpen ? (
            <div className="border p-2">x</div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
      </div>
      <DropDown category={category} />
    </>
  );
}

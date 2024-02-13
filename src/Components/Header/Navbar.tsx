import { useEffect, useState } from "react";
import axios from "axios";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { Categories } from "../../types/types";
import categorieData from "../../categoriedata";

export default function Navbar() {
  // declare a state to handle the burger menu
  const [isOpen, setIsOpen] = useState(false);
  // function to handle the click on the burger menu
  function handleClick(): void {
    setIsOpen(!isOpen);
  }
  // declare a state for the category data
  const [category, setCategory] = useState([]);

  // fetch data test with axios
  const fetchCategory = async () => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("auth")}`;
      const response = await axios.get(
        "http://kim-pham.vpnuser.lan/APO/projet-13-brico-deco-back/public/api/categorie"
      );
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // restrict the fetch to the first render
  useEffect(() => {
    // fetchCategory();
    setCategory(categorieData);
    //Changer par le fetch
  }, []);

  return (
    <>
      <div className="border-t border-b border-blue-900 p-3 flex justify-end sm:justify-between">
        <ul className="hidden sm:flex justify-evenly grow">
          {/*link to Home */}
          <Link to={"/"}>
            <li>Accueil</li>
          </Link>

          {/* For each category create li */}
          {category.map((category: Categories) => (
            <Link key={category.id} to={`categorie/${category.id}`}>
              <li>{category.nomCategorie}</li>
            </Link>
          ))}
          {/*link to create tutorial */}
          <Link to={"tutoriel/create"}>
            <li>Ajoutez votre tutoriel</li>
          </Link>
        </ul>
        <div className="sm:hidden" onClick={handleClick}>
          {/* switch icon if menu burger is active or not */}
          {isOpen ? (
            <div className="border p-2" onClick={handleClick}>
              x
            </div>
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
      <DropDown isOpen={isOpen} setIsOpen={setIsOpen} category={category} />
    </>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import categorieData from "../../categoriedata";

interface Category {
  id: number;
  nomCategorie: string;
  description: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  const [category, setCategory] = useState([]);
  // fetch data test with axios
  // const fetchCategory = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://64ed31429cbded49acab427b.cloud/api/categorie"
  //     );
  //     setCategory(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    setCategory(categorieData); //Changer par le fetch
  }, []);

  return (
    <>
      <div className="border-t border-b border-gray-200 p-3 ml-3 flex justify-end sm:justify-between">
        <ul className="hidden sm:flex justify-evenly grow">
          <Link to={"/"}>
            <li>Accueil</li>
          </Link>
          {/* For each category */}
          {category.map((category: Category) => (
            <li key={category.id}>{category.nomCategorie}</li>
          ))}
          <Link to={"tutoriel/create"}>
            <li>Ajoutez votre tutoriel</li>
          </Link>
        </ul>
        <div className="sm:hidden" onClick={handleClick}>
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
      <DropDown isOpen={isOpen} category={category} />
    </>
  );
}

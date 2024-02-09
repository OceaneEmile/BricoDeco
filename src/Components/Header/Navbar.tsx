import { useEffect, useState } from "react";
import categoryData from "../../fakedata";
import axios from "axios";
import MenuBurger from "../Button/MenuBurger";
import DropDown from "./DropDown";

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

  const [category, setCategory] = useState(categoryData);
  // http://64ed31429cbded49acab427b.cloud.lan:8080/categorie
  // fetch data test with axios
  // const fetchCategory = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://kim-pham.vpnuser.lan/APO/projet-13-brico-deco-back/public/api/tutoriels/random"
  //     );
  //     setCategory(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  return (
    <>
      <div className="border-t border-b border-gray-200 p-3 ml-3 flex justify-end sm:justify-between">
        <ul className="hidden sm:flex justify-evenly grow">
          <li>Accueil</li>
          {/* For each category */}
          {category.map((category: Category) => (
            <li key={category.id}>{category.nomCategorie}</li>
          ))}
          <li>Ajoutez votre tuto</li>
        </ul>
        <div className="sm:hidden" onClick={handleClick}>
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
        </div>
      </div>
      <DropDown isOpen={isOpen} />
    </>
  );
}

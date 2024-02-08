import { useEffect, useState } from "react";
import categoryData from "../../fakedata";
import axios from "axios";

interface Category {
  id: number;
  nomCategorie: string;
  description: string;
}

export default function Navbar() {
  const [category, setCategory] = useState(categoryData);

  // fetch data test with axios
  // const fetchCategory = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://64ed31429cbded49acab427b.cloud.lan/Apotheose/projet-13-brico-deco-back/public/categorie"
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
    <div className="border-t border-b border-gray-200 p-3 ml-3 flex justify-end sm:justify-between">
      <ul className="hidden sm:flex justify-evenly grow">
        <li>Accueil</li>
        {/* For each category */}
        {category.map((category: Category) => (
          <li key={category.id}>{category.nomCategorie}</li>
        ))}
        <li>Ajoutez votre tuto</li>
      </ul>
    </div>
  );
}

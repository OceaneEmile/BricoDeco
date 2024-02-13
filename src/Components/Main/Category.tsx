import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryCategory from "./GalleryCategory";
import categoryId from "../../categoryId";

export default function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState();
  // route recupere info category by id
  const fetchCategoryByID = async () => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("auth")}`;

      const response = await axios.get(
        `http://kim-pham.vpnuser.lan/APO/projet-13-brico-deco-back/public/api/categorie/${id}`
      );
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // restrict the fetch to the first render
  useEffect(() => {
    // fetchCategoryById()
    setCategory(categoryId);
  }, [id]);

  return (
    <div>
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left border-b border-blue-900 w-fit mb-2">
        {category ? category.nomCategorie : ""}
      </h3>
      <p>{category ? category.description : ""}</p>
      <GalleryCategory />
    </div>
  );
}

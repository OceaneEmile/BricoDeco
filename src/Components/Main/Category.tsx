import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryCategory from "./GalleryCategory";
import categoryId from "../../categoryId";
import { Categories } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchCategoryById } from "../../store/reducer/tutoriel";

export default function Category() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const category: any = useSelector(
    (state: RootState) => state.tutoriel.category
  );
  // restrict the fetch to the first render
  useEffect(() => {
    dispatch(fetchCategoryById(id) as any);
    // setCategory(categoryId);
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

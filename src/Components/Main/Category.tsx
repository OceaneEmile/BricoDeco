import { useParams } from "react-router-dom";
import { useEffect } from "react";
import GalleryCategory from "./GalleryCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  fetchCategoryById,
  findIdCategory,
} from "../../store/reducer/tutoriel";
import { resetMissingValue } from "../../store/reducer/tutorielCreate";

export default function Category() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const category: any = useSelector(
    (state: RootState) => state.tutoriel.category
  );
  // restrict the fetch to the first render
  useEffect(() => {
    dispatch(findIdCategory(id as any));
    dispatch(fetchCategoryById() as any);
    dispatch(resetMissingValue());
  }, [id]);

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-3xl text-left border-b border-blue-900 w-fit mb-2">
        {category && category.nomCategorie}
      </h2>
      <p>{category && category.description}</p>
      <GalleryCategory />
    </div>
  );
}

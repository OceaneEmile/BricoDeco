import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import Button from "../Button/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTutorielsByCategory } from "../../store/reducer/tutoriel";

export default function GalleryCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tutoriels = useSelector(
    (state: any) => state.tutoriel.tutorielsByCategory
  );
  useEffect(() => {
    dispatch(fetchTutorielsByCategory(id) as any);
  }, [id]);

  return (
    <div className="py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-3xl text-left">
            Les Derniers Tutos :
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-10 sm:mt-4 sm:pt-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {/* for each tuto create card */}
          {tutoriels
            ? tutoriels.map((tutoriel: any) => (
                <Link key={tutoriel.id} to={`tutoriel/${tutoriel.id}`}>
                  <Card tutoriel={tutoriel} />
                </Link>
              ))
            : ""}
        </div>
        <div className="mt-10">
          <Button text="Voir plus" />
        </div>
      </div>
    </div>
  );
}

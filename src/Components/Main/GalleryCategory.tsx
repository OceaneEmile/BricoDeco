import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTutorielsByCategory,
  showMoreTutosCategory,
} from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { Tutos } from "../../types/types";

export default function GalleryCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [noMoreTutos, setNoMoreTutos] = useState(false);
  const numberTutos = useSelector(
    (state: RootState) => state.tutoriel.numberOfTutosCategory
  );
  const tutoriels = useSelector(
    (state: RootState) => state.tutoriel.tutorielsByCategory
  );
  useEffect(() => {
    dispatch(fetchTutorielsByCategory(id) as any);
  }, [id]);

  function show() {
    dispatch(showMoreTutosCategory() as any);
    dispatch(fetchTutorielsByCategory(id) as any);
  }
  useEffect(() => {
    if (tutoriels) {
      if (tutoriels.length < numberTutos) {
        setNoMoreTutos(true);
      } else {
        setNoMoreTutos(false);
      }
    }
  }, [tutoriels]);
  return (
    <div className="py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-3xl text-left"></h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-10 sm:mt-4 sm:pt-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {/* for each tuto create card */}
          {tutoriels
            ? tutoriels.map((tutoriel: Tutos) => (
                <Link key={tutoriel.id} to={`/tutoriel/${tutoriel.id}`}>
                  <Card tutoriel={tutoriel} />
                </Link>
              ))
            : ""}
        </div>
        <div className="mt-10" onClick={show}>
          {noMoreTutos ? "" : <Button text="Voir plus" />}
        </div>
      </div>
    </div>
  );
}

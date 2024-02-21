import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { fetchTutorielsByUser } from "../../store/reducer/tutoriel";
import Card from "../Main/Card";
import Publied from "./Publied";
import { Tutos } from "../../types/types";

export default function userGallery({ text }: { text: string }) {
  const dispatch = useDispatch();
  const tutoriels = useSelector(
    (state: RootState) => state.tutoriel.tutorielsByUser
  );

  useEffect(() => {
    dispatch(fetchTutorielsByUser() as any);
  }, []);

  return (
    <div className="py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-3xl text-left">
            {text}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-900 pt-10 sm:mt-4 sm:pt-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {/* for each tuto create card */}
          {tutoriels.map((tutoriel: Tutos) => (
            <Link key={tutoriel.id} to={`tutoriel/${tutoriel.id}`}>
              <Publied tutoriel={tutoriel} />
              <Card tutoriel={tutoriel} />
            </Link>
          ))}
        </div>
        <div className="mt-10"></div>
      </div>
    </div>
  );
}

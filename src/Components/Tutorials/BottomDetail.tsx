import { useDispatch, useSelector } from "react-redux";
import { Categories, Tutos } from "../../types/types";
import Categorybadge from "../Button/Categorybadge";
import EditPanel from "./EditPanel";
import { RootState } from "../../store";
import { useEffect } from "react";
import { isAuthor } from "../../store/reducer/tutoriel";
interface Props {
  tutoriel: Tutos;
}

export default function BottomDetail({ tutoriel }: Props) {
  const transformDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };
  const date = transformDate(tutoriel.datePublication);
  const dispatch = useDispatch();
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const user = useSelector((state: RootState) => state.user.user);
  const isSameAuthor = useSelector(
    (state: RootState) => state.tutoriel.isAuthor
  );
  // console.log(tutoriel.utilisateur);
  // console.log(user);
  useEffect(() => {
    if (tutoriel.utilisateur) {
      dispatch(
        isAuthor({
          author: tutoriel.utilisateur.id,
          user: user.id,
        } as any)
      );
    }
  }, [tutoriel.utilisateur, isLogged, user]);

  return (
    <div className="border-t border-b border-blue-900 mt-8 py-4 flex flex-col items-center sm:justify-between sm:flex-row ">
      <div className="flex w-2/4 justify-between ml-4 items-center mb-4">
        <p className="font-bold">
          {tutoriel.utilisateur && tutoriel.utilisateur.pseudonyme}
        </p>
        <p className="text-gray-600">{date}</p>
        <div className="flex gap-8">
          {tutoriel.categories &&
            tutoriel.categories.map((categorie: Categories) => (
              <Categorybadge key={categorie.id} categorie={categorie} />
            ))}
        </div>
      </div>
      {isSameAuthor && <EditPanel />}
    </div>
  );
}

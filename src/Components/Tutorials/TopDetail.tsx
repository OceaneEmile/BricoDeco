import { Tutos } from "../../types/types";

interface Props {
  tutoriel: Tutos;
}

export default function TopDetail({ tutoriel }: Props) {
  return (
    <div className="flex flex-col items-center sm:flex-row ">
      <img className="w-2/4" src={tutoriel.image} alt="" />

      <div className="self-end mt-8 ml-4">
        <h2 className="text-3xl mb-8">{tutoriel.titre}</h2>
        <p>{tutoriel.resume}</p>
      </div>
    </div>
  );
}

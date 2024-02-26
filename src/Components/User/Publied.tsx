import { Tutos } from "../../types/types";

interface Props {
  tutoriel: Tutos;
}
export default function Publied(tutoriel: Props) {
  return (
    <div className="relative">
      {tutoriel.tutoriel.estPublie ? (
        <p className="absolute top-1 left-1 w-4 h-4 bg-green-700 rounded-full z-50"></p>
      ) : (
        <p className="absolute top-1 left-1 w-4 h-4 bg-red-700 rounded-full z-50"></p>
      )}
    </div>
  );
}

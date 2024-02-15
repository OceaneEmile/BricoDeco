import { Categories } from "../../types/types";

interface Props {
  categorie: Categories;
}

export default function Categorybadge({ categorie }: Props) {
  return (
    <div>
      <span className="inline-flex items-center rounded-md text-white bg-gradient-to-br from-blue-900 to-blue-500 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {categorie.nomCategorie}
      </span>
    </div>
  );
}

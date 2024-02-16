import { Categories } from "../../types/types";

interface Props {
  category: Categories;
}

export default function CategorybadgCaroussel({ category }: Props) {
  return (
    <div>
      <span className="inline-flex items-center text-white bg-gradient-to-br from-blue-900 to-blue-500 rounded-md bg-blue-50 px-2 py-1 text-s font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {category.nomCategorie}
      </span>
    </div>
  );
}

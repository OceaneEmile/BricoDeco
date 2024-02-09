import category from "../../fakedata";

interface Category {
  id: number;
  nomCategorie: string;
  description: string;
  isOpen: boolean;
}
export default function DropDown({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={
        isOpen
          ? " absolute w-full border-t border-b border-gray-200 p-3 flex justify-end sm:justify-between sm:hidden"
          : "hidden"
      }
    >
      <ul className=" sm:flex justify-evenly grow">
        <li>Accueil</li>
        {/* For each category */}
        {category.map((category: Category) => (
          <li key={category.id}>{category.nomCategorie}</li>
        ))}
        <li>Ajoutez votre tuto</li>
      </ul>
    </div>
  );
}

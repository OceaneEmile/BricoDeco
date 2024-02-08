import categoryData from "../../fakedata";

interface Category {
  id: number;
  nomCategorie: string;
  description: string;
}
export default function Navbar() {
  return (
    <div className="border-t border-b border-gray-200 p-3 ml-3 flex justify-end sm:justify-between">
      <ul className="hidden sm:flex justify-evenly grow">
        <li>Accueil</li>
        {/* For each category */}
        {categoryData.map((category: Category) => (
          <li key={category.id}>{category.nomCategorie}</li>
        ))}
        <li>Ajoutez votre tuto</li>
      </ul>
    </div>
  );
}

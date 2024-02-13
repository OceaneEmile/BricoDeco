export default function ToolsList({ tools }) {
  return (
    <div className="w-full sm:border-r border-gray-200 p-4">
      <h4 className="font-bold text-lg ">Listes des outils :</h4>
      <ul className="flex justify-around flex-wrap gap-8 sm:flex-col sm:mt-8">
        {tools
          ? tools.map((tool) => <li key={tool.id}>{tool.nomDeLoutil}</li>)
          : ""}
      </ul>
    </div>
  );
}

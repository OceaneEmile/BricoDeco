import { Tools } from "../../types/types";

interface Props {
  tools: Tools[];
}
export default function ToolsList({ tools }: Props) {
  return (
    <div className="w-fit sm:border-r border-blue-900 p-4">
      <h4 className="font-bold text-lg ">Listes des outils :</h4>
      <ul className="flex justify-around flex-wrap gap-8 sm:flex-col sm:mt-8">
        {tools
          ? tools.map((tool) => <li key={tool.id}>{tool.nomDeLoutil}</li>)
          : ""}
      </ul>
    </div>
  );
}

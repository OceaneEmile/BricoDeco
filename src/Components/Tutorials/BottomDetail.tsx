import Button from "../Button/Button";
import Categorybadge from "../Button/Categorybadge";
import EditPanel from "./EditPanel";

export default function BottomDetail() {
  return (
    <div className="border-t border-b border-gray-200 mt-8 py-4 flex justify-between ">
      <div className="flex w-2/4 justify-between ml-4 items-center">
        <p>auteur</p>
        <p>date</p>
        <div className="flex gap-8">
          <Categorybadge />
          <Categorybadge />
        </div>
      </div>
      <EditPanel />
    </div>
  );
}

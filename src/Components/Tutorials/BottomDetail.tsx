import Categorybadge from "../Button/Categorybadge";
import EditPanel from "./EditPanel";

export default function BottomDetail() {
  return (
    <div className="border-t border-b border-gray-200 mt-8 py-4 flex flex-col items-center sm:justify-between sm:flex-row ">
      <div className="flex w-2/4 justify-between ml-4 items-center mb-4">
        <p className="font-bold">auteur</p>
        <p className="text-gray-600">date</p>
        <div className="flex gap-8">
          {/* <Categorybadge />
          <Categorybadge />*/}
        </div>
      </div>
      <EditPanel />
    </div>
  );
}

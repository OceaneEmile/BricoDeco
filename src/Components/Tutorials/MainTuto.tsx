import MainTutoDetail from "./MainTutoDetail";
import Step from "./Step";
import ToolsList from "./ToolsList";

export default function MainTuto() {
  return (
    <div>
      <MainTutoDetail />
      <div className="flex flex-col sm:flex-row ">
        <ToolsList />
        <Step />
      </div>
    </div>
  );
}

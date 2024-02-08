import MainTutoDetail from "./MainTutoDetail";
import Step from "./Step";
import ToolsList from "./ToolsList";

export default function MainTuto() {
  return (
    <div>
      <MainTutoDetail />
      <div>
        <ToolsList />
        <Step />
      </div>
    </div>
  );
}

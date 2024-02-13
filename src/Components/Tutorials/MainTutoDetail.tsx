import BottomDetail from "./BottomDetail";
import ToolsList from "./ToolsList";
import TopDetail from "./TopDetail";

export default function MainTutoDetail({ tutoriel }) {
  return (
    <div>
      <TopDetail tutoriel={tutoriel} />
      <BottomDetail tutoriel={tutoriel} />
    </div>
  );
}

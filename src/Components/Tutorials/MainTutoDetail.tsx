import { Tutos } from "../../types/types";
import BottomDetail from "./BottomDetail";
import TopDetail from "./TopDetail";

interface Props {
  tutoriel: Tutos[];
}
export default function MainTutoDetail({ tutoriel }: Props) {
  return (
    <div>
      <TopDetail tutoriel={tutoriel} />
      <BottomDetail tutoriel={tutoriel} />
    </div>
  );
}

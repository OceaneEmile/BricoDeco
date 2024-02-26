import Gallery from "./Gallery";
import Caroussel from "./Caroussel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetMissingValue } from "../../store/reducer/tutorielCreate";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetMissingValue());
  }, []);
  return (
    <div>
      <Caroussel />
      <Gallery text={"Les Derniers Tutos :"} />
    </div>
  );
}

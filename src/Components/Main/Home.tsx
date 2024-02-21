import Gallery from "./Gallery";
import Caroussel from "./Caroussel";

export default function Home() {
  return (
    <div>
      <Caroussel />
      <Gallery text={"Les Derniers Tutos :"} />
    </div>
  );
}

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.scss";
import ButtonTop from "./Components/Button/ButtonTop";

export default function App() {
  return (
    <>
      <Header />
      <div className="content bg-white bg-opacity-80 min-h-screen">
        <Outlet />
      </div>
      <ButtonTop />
      <Footer />
    </>
  );
}

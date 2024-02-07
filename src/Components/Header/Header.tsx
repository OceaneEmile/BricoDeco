import React from "react";
import LoginComponent from "./LoginComponent";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className=" py-2 bg-white">
      <div className="flex justify-between items-center">
        <p>image</p>
        <div>
          <h1 className="text-4xl font-bold">Bric'O Déc'O</h1>
          <p>un tuto pour les gouverner tous</p>
        </div>
        <LoginComponent />
      </div>
      <Navbar />
    </div>
  );
}

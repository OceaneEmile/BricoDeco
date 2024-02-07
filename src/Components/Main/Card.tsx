import React from "react";

export default function Card() {
  return (
    <div className="max-w-sm border border-solid boder-black p-5 infoCard">
      <img
        className="max-w"
        src="https://kazan.kronostime.ru/upload/images.opt/iblock/5d3/u0l1tqhz9ngu2ksf7ah5exzukuxfz098/WFGG-W85_2.webp"
        alt=""
      />
      <p className="text-center font-bold text-lg">titre de ma carte</p>
      <p className="text-center">categorie</p>
      <div className=" flex justify-between invisible infoCard">
        <p className="text-gray-500">Jason Durouleau</p>
        <p className="text-gray-500">06/02/1963</p>
      </div>
    </div>
  );
}

import React from "react";

interface CardMemberProps {
  info: {
    id: number;
    link: string;
    name: string;
    photo: string;
    tools: string;
    resume: string;
  };
}
export default function CardMember({ info }: CardMemberProps) {
  return (
    <div className="max-w-sm border border-solid boder-black p-5 infoCard cursor-pointer">
      <img className="max-w rounded-full" src={info.photo} alt="" />
      <p className="text-center font-bold text-lg">{info.name}</p>
      <p className="text-center">Outils prefere : {info.tools}</p>
      <p className="text-center">{info.resume}</p>
    </div>
  );
}

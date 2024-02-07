import React from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <div className="flex justify-center cursor-pointer">
      <p className=" text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 max-w-xs">
        {text}
      </p>
    </div>
  );
}

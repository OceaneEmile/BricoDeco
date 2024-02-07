import React from "react";
import Button from "../Button/Button";

export default function LoginComponent() {
  return (
    <div>
      <p>peut etre logo</p>
      <div className="flex">
        <Button text={"Inscrivez vous"} />
        <Button text={"Connectez vous"} />
      </div>
      <p>formulaire de connexion</p>
    </div>
  );
}

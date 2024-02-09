import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-evenly pt-4 border-t border-gray-200 ">
      <p>copyright</p>
      <Link to={"about"}>
        <p>About</p>
      </Link>
      <Link to={"contact"}>
        <p>Contact</p>
      </Link>
    </div>
  );
}

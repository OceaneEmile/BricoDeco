import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <ul className="flex justify-evenly p-2 border-t border-blue-900 bg-white w-screen">
      {/* link to about page */}
      <NavLink
        to={"about"}
        style={({ isActive }) => {
          return {
            color: isActive ? "coral" : "",
          };
        }}
      >
        <li>About</li>
      </NavLink>
      <li>Developper avec passion</li>
      {/* link to contact page */}
      <NavLink
        to={"contact"}
        style={({ isActive }) => {
          return {
            color: isActive ? "coral" : "",
          };
        }}
      >
        <li>Contact</li>
      </NavLink>
    </ul>
  );
}

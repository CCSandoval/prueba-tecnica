import React from "react";
import { Link } from "react-router-dom";
// hover:bg-indigo-300 ${
//     isActive ? "bg-indigo-200" : "bg-violet-400"
//   }
const NavLink = ({ tag, icon, route }) => {
  return (
    <div className="text-center text-2xl font-extrabold">
      <Link
        className="block py-3 px-44 duration:300 hover:bg-dark-hover text-white h-full w-full hover:bg- duration-200"
        to={route}
      >
        <i className={`${icon} mx-2`}></i>
        <span>{tag}</span>
      </Link>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex 2xl:bg-navBackground bg-contain justify-around w-full sticky top-0">
      <NavLink tag="Inicio" icon="fas fa-home" route="/inicio" />
      <NavLink tag="Usuarios" icon="fas fa-user" route="/usuarios" />
      <NavLink tag="Preguntas" icon="fas fa-question" route="/preguntas" />
    </div>
  );
};

export default NavBar;

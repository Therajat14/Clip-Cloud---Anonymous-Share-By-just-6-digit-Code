// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const linkBaseClass = "transition-colors";
  const getActiveClass = (isActive, color) =>
    isActive
      ? `text-${color}-400 font-semibold`
      : "text-white hover:text-" + color + "-400";

  return (
    <nav className="bg-opacity-70 fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between bg-black px-4 py-4 backdrop-blur-md md:px-10">
      <NavLink to="/" className="text-xl font-bold text-indigo-400">
        IncogShare
      </NavLink>
      <div className="space-x-6 text-sm md:text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkBaseClass} ${getActiveClass(isActive, "indigo")}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/share"
          className={({ isActive }) =>
            `${linkBaseClass} ${getActiveClass(isActive, "green")}`
          }
        >
          Share
        </NavLink>
        <NavLink
          to="/receive"
          className={({ isActive }) =>
            `${linkBaseClass} ${getActiveClass(isActive, "yellow")}`
          }
        >
          Receive
        </NavLink>
      </div>
    </nav>
  );
};

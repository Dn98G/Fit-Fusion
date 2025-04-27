import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-purple-600 text-white flex items-center justify-between px-6 py-4 shadow-md">
      {/* Title */}
      <div className="text-2xl font-bold tracking-wide">
        Fit Fusion
      </div>

      {/* Links */}
      <div className="flex space-x-6">
        <NavLink
          exact
          to="/"
          className="text-white hover:text-gray-300 transition"
          activeClassName="underline underline-offset-4"
        >
          Home
        </NavLink>
        <NavLink
          to="/calculator"
          className="text-white hover:text-gray-300 transition"
          activeClassName="underline underline-offset-4"
        >
          BMI Calculator
        </NavLink>
        <NavLink
          to="/workouts"
          className="text-white hover:text-gray-300 transition"
          activeClassName="underline underline-offset-4"
        >
          Workouts
        </NavLink>
        <NavLink
          to="/saved"
          className="text-white hover:text-gray-300 transition"
          activeClassName="underline underline-offset-4"
        >
          Saved
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

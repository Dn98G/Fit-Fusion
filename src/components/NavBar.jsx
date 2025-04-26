import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Fit Fusion</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">BMI Calculator</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/saved">Saved</Link>
      </div>
    </nav>
  );
};

export default NavBar;

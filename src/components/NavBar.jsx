import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">FIT FUSION</h1>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            HOME
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/workouts" className="navbar-link">
            WORKOUTS
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/saved" className="navbar-link">
            SAVED
          </Link>
        </li>
      </ul>
    </nav>
  );
}

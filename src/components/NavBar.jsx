import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>Fit Fusion</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

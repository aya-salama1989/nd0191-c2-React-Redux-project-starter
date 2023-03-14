import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav>
      <ul className="no-bullets">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add New Poll</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaders Board</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;

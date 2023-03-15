import { Link } from "react-router-dom";

const NavComponent = () => {

  const handleLogOut =()=>{
    //TODO: set user to null
    console.log("log out user");
  }

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
        <li>
          {" "}
          <Link to="/login" onClick={handleLogOut}>Log out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;

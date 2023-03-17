import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/AuthedUser";

const NavComponent = (props) => {
  const handleLogOut = () => {
    if (props.authedUser != null) {
      props.dispatch(setAuthedUser(null));
    }
  };

  return (
    <nav data-testid="testId-nav-component">
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
          <Link to="/login" onClick={handleLogOut}>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(NavComponent);

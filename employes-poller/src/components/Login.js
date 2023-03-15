import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/AuthedUser";

const Login = (props) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();

    const autheduser = Object.values(props.users).filter((user) => {
      console.log("za user is:", user);
      return user.name === userName && user.password === password;
    });

    if (autheduser.length === 0) {
      document.getElementById("errorMessage").textContent =
        "Invalide user Log In";
    } else {
      document.getElementById("errorMessage").textContent = "";

      props.dispatch(setAuthedUser(autheduser[0].id));
      navigate("/");
    }
  };

  const handleUserName = (e) => {
    const user = e.target.value;
    console.log(user);
    setUserName(user);
  };

  const handleUserPassword = (e) => {
    const password = e.target.value;
    console.log(password);
    setUserPassword(password);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          className="login-form-input"
          placeholder={"Enter User Name"}
          onChange={handleUserName}
        />
        <input
          type="password"
          className="login-form-input"
          placeholder={"Enter Password"}
          onChange={handleUserPassword}
        />
        <input type="submit" className="login-form-input" />
        <span id="errorMessage" style={{ color: "red" }}></span>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  console.log(users);
  console.log(authedUser);
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Login);

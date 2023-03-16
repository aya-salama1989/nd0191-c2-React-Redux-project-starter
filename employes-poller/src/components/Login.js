import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAuthedUser } from "../actions/AuthedUser";
import { connect } from "react-redux";

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
      props.dispatch(setAuthedUser(autheduser[0].id));
      document.getElementById("errorMessage").textContent = "";
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
          data-testid="testId-name-input"
          type="text"
          className="login-form-input"
          placeholder={"Enter User Name"}
          onChange={handleUserName}
        />
        <input
          data-testid="testId-password-input"
          type="password"
          className="login-form-input"
          placeholder={"Enter Password"}
          onChange={handleUserPassword}
        />
        <input
          data-testid="testId-submit-button"
          type="submit"
          className="login-form-input"
        />
        <span id="errorMessage" style={{ color: "red" }}></span>
      </form>
    </div>
  );
};

const mapStateToProps = (props) => props;

export default connect(mapStateToProps)(Login);

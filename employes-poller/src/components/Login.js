import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { setAuthedUser } from "../actions/AuthedUser";
import { connect } from "react-redux";

const Login = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log("props: ", props);

  const autheduser = Object.values(props.users).filter((user) => {
    console.log("user: ", user);
    console.log(
      "user.name === userName && user.password === password: ",
      user.name === userName && user.password === password
    );

    return user.name === userName && user.password === password;
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      !autheduser ||
      userName === "" ||
      password === "" ||
      autheduser.length === 0
    ) {
      setErrorMessage("Invalide user Log In");
    } else {
      console.log("autheduser: ", autheduser);
      props.dispatch(setAuthedUser(autheduser[0].id));
      setErrorMessage("success");
      console.log(location.pathname);
      //TODO: reviewer please try the function and notice the behvior,
      // wish I understood your suggessions properly!
      // navigate(location === null ? "/" : location.path);

      //pathname always redireccts back to login
      // navigate(location === null ? "/" : location.pathname);

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
        <span
          id="errorMessage"
          style={{ color: "red" }}
          data-testid="error-notifier"
        >
          {errorMessage}
        </span>
      </form>
    </div>
  );
};

const mapStateToProps = (props) => props;

export default connect(mapStateToProps)(Login);

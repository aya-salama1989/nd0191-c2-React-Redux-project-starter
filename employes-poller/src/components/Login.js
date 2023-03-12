const Login = () => {
  const handleLogIn = () => {
    //TODO: handle login vs available users here
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogIn}>
        <input type="text" className = "login-form-input" placeholder={"Enter User Name"} />
        <input type="password" className = "login-form-input" placeholder={"Enter Password"} />
        <input type="submit" className = "login-form-input" value="Submit" />
      </form>
    </div>
  );
};

export default Login;

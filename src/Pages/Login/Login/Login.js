import React, { useState } from "react";
import useAuth from "./../../../hooks/useAuth";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import "./Login.css";
import { Spinner, Button } from "react-bootstrap";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);

  };
  return (
    <div className="login text-center" >
      <h1 className=" text-primary mt-5 pb-3 gum">Please Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="email"
          onBlur={handleOnChange}
          placeholder="Enter Your Email"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          onBlur={handleOnChange}
          placeholder="Enter Your Password"
        />{" "}
        <br />
        <input type="submit" value="Login" /> <br /> <br />
        <NavLink to="/register">
          <Button> New User ? Please Register </Button>
        </NavLink>{" "} <br />
        {isLoading && <Spinner animation="border" variant="danger" />} <br />
        {user?.email && <alert severity="success">Login Successfully !!!</alert>}
        {authError && <alert severity="error"> {authError} </alert>}
      </form>
      <br />
      <b className="text-danger ">---------Or----------</b> <br />
      <div className="login mt-3">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-warning fw-bolder"
        >
          Google Sing In
        </button>
      </div>
    </div>
  );
};

export default Login;

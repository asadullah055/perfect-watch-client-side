import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
const Login = () => {
  const { loginUser, authError, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();
  const handleOnChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <h2 className="text-center">Please Login</h2>
          <form onSubmit={handleLoginSubmit} className="w-50">
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control p-3"
                id="formGroupExampleInput1"
                placeholder="Email"
                onBlur={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control p-3"
                id="formGroupExampleInput2"
                placeholder="Password"
                onBlur={handleOnChange}
              />
            </div>
            <div className="text-center">
              <button
                style={{ backgroundColor: "#f9706a" }}
                className="btn fw-bold text-white text-uppercase"
                type="submit"
              >
                Login
              </button>
            </div>
            <h6 className="mt-2 text-center">
              New User? <Link to="/register">Please Register</Link>{" "}
            </h6>
          </form>
          {isLoading && <Spinner animation="border" variant="info" />}
          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
      </div>
    </>
  );
};

export default Login;

import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const { registerUser, authError, isLoading } = useAuth();
  const [registerData, setRegisterData] = useState({});
  const history = useHistory();

  const handleOnChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      alert("Password Wrong");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <h2 className="text-center">Please Register</h2>
          <form onSubmit={handleRegisterSubmit} className="w-50">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control p-3"
                id="formGroupExampleInput0"
                placeholder="Name"
                onBlur={handleOnChange}
              />
            </div>
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
                id="formGroupExampleInput6"
                placeholder="Password"
                onBlur={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password2"
                className="form-control p-3"
                id="formGroupExampleInput2"
                placeholder="Re-Type Password"
                onBlur={handleOnChange}
              />
            </div>
            <div className="text-center">
              <button
                style={{ backgroundColor: "#f9706a" }}
                className="btn fw-bold text-white text-uppercase ps-3 pe-3"
                type="submit"
              >
                Register
              </button>
            </div>
            <h6 className="mt-2 text-center">
              Have an Already Account? <Link to="/login">Please Login</Link>
            </h6>
          </form>
          {isLoading && <Spinner animation="border" variant="info" />}
          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
      </div>
    </>
  );
};

export default Register;

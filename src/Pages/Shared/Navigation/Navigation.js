import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className=" sticky-top ">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar  navbar-expand-lg bg-white p-3 shadow"
      >
        <Container className="text-center">
          <Navbar.Brand as={Link} to="/home">
            <h2>Perfect Watch</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              className=" text-uppercase font-size"
              as={Link}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-uppercase font-size"
              as={Link}
              to="/allWatch"
            >
              All Watch
            </Nav.Link>
            {user?.email && (
              <Nav.Link
                className="text-uppercase font-size"
                as={Link}
                to="/dashboard"
              >
                Dashboard
              </Nav.Link>
            )}
            {user?.email ? (
              <button onClick={logOut} className="btn text-uppercase">
                Logout
              </button>
            ) : (
              <Nav.Link className="text-uppercase" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="text-success fs-3">Fruits</span> &{" "}
          <span className="text-success fs-3 ">Vegetable</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            {user ? (
              <>
                <CustomLink to="/manageitem">Manage Item</CustomLink>
                <CustomLink to="/additem">Add Item</CustomLink>
                <CustomLink to="/myitem">My Item</CustomLink>
                <div className="signout">
                  <button
                    onClick={handleSignout}
                    className="btn btn-link text-decoration-none text-white text-start signout"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="login">
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="login-button text-white"
                >
                  Login
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

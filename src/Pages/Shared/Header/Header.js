import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = ()=>{
    signOut(auth);
  }


  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold"><span className="text-success fs-3">Fruits</span> & <span className="text-success fs-3 ">Vegetable</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              {
                user
                ?
                <>
                  <Nav.Link as={Link} to="/manageitem">Manage Item</Nav.Link>
                  <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                  <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                  <div className="signout">
                    <button onClick={handleSignout} className="btn btn-link text-decoration-none text-white text-start signout">Sign Out</button>
                  </div>
                </>
                
                :
                <div className="login">
                  <Nav.Link as={Link} to="/login" className="login-button text-white">Login</Nav.Link>
                </div>
                
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;

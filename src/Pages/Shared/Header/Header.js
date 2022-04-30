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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Fruits & Vegetable Stock</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              {
                user
                ?
                <>
                  <Nav.Link as={Link} to="/manageitem">Manage Item</Nav.Link>
                  <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                  <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                  <button onClick={handleSignout} className="btn btn-link text-decoration-none text-white">Sign Out</button>
                </>
                
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;

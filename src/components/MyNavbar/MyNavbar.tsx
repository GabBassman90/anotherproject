import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Prodotti
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

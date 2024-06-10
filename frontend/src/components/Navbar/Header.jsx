import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-3">
      <Navbar expand="lg" py-3 className="navbar">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} className="signup__logo" alt="logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-auto">
              <LinkContainer to="/AboutUs">
                <Nav.Link href="#about-us" className="nav-text">
                  About Us
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/faqs">
                <Nav.Link className="nav-text">FAQs</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/help">
                <Nav.Link className="nav-text">Help</Nav.Link>
              </LinkContainer>

              
            </Nav>
            <Nav className="header-second ">
              <LinkContainer to="/Login">
                <Nav.Link className="nav-text">Login</Nav.Link>
              </LinkContainer>
              <Link to="/getstarted">
                <Button className="btn start_selling_btn">Get Started</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

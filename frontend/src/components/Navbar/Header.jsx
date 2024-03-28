import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navbar">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">
              <img src={logo} className="signup__logo" alt="logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-auto">
              <LinkContainer to="/Signup">
                <Nav.Link href="#about-us" className="nav-text">
                  About Us
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/faqs">
                <Nav.Link className="nav-text">FAQs</Nav.Link>
              </LinkContainer>

              <NavDropdown
                title="Categories"
                id="basic-nav-dropdown"
                className="dropdown-link"
              >
                <LinkContainer to="/food&&beverages">
                  <NavDropdown.Item>Food and Beverages</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/Device&&Accessories">
                  <NavDropdown.Item>Devices and Accessories</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/Cosmetics&&Fashion">
                  <NavDropdown.Item href="#action/3.3">
                    Cosmetics and Fashion
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav className="header-second ">
              <LinkContainer to="/login">
                <Nav.Link className="nav-text">Login</Nav.Link>
              </LinkContainer>
              <Link to="/onClickProfile">
                <Button className="btn start_selling_btn">Start selling</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

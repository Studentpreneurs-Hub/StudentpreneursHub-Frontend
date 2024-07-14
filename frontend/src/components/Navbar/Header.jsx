import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button, Form } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import "./header.css";
import logo from "../../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

function Header() {
  const { authTokens, logout } = useAuth();

  return (
    <header className="py-3">
      <Navbar expand="lg" className="navbar">
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
                <Nav.Link className="nav-text">About Us</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/faqs">
                <Nav.Link className="nav-text">FAQs</Nav.Link>
              </LinkContainer>

              {authTokens ? (
                <>
                  <NavDropdown
                    title="Categories"
                    id="basic-nav-dropdown"
                    className="dropdown-link"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Electronics
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Fashion
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Stationary
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/help">
                    <Nav.Link className="nav-text">Help</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
            <Nav className="header-second">
              {authTokens ? (
                <>
                  <Form className="d-flex">
                    <span className="search-container">
                    <IoSearchOutline className="glass" />
                    <Form.Control
                      type="search"
                      placeholder="Search..."
                      className="search"
                      aria-label="Search"
                    /> 
                    </span>
                    
                    <Link to='/register_bussiness'><Button className="start_selling_btn">+ Start Selling </Button></Link>
                  </Form>
                  <Nav.Link className="nav-text" onClick={logout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link className="nav-text">Login</Nav.Link>
                  </LinkContainer>
                  <Link to="/signup">
                    <Button className="btn start_btn">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import './header.css'
import logo from "../../assets/logo.png";


function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="signup__logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-auto">
              <Nav.Link href="#about-us" className="nav-text">
                About Us
              </Nav.Link>
              <Nav.Link href="#FAQs" className="nav-text">
                FAQs
              </Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown" className="dropdown-link">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="header-second ms-auto">
              <Nav.Link href="#login" className="nav-text">
                Login
              </Nav.Link>
              <Button className="btn btn-primary">Start selling</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
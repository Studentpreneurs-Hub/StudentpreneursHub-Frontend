import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import './header.css'


function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav m-auto">
              <Nav.Link href="#home" className='nav_text'>About Us</Nav.Link>
              <Nav.Link href="#link" className='nav_text'>FAQs</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown" className='dropdown-link'>
                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
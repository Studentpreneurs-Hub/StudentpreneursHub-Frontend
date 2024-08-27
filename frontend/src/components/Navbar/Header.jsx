import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
  Dropdown,
} from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import "./header.css";
import logo from "../../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { BASE_API_URI } from "../../utils/constants";
import NoProfileImg from "../../assets/no-profile-picture.png";

function Header() {
  const { authTokens, logout } = useAuth();
  const [accessToken, setAccessToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userStatus, setUserStatus] = useState(null);
  const [profileInfo, setProfileInfo] = useState({}); 

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  useEffect(() => {
    if (authTokens && authTokens.user) {
      setUserEmail(authTokens.user.email_address); 
    }
  }, [authTokens]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get(
          `${BASE_API_URI}/api/vendor/${userEmail}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken.token}`,
            },
          }
        );
        setUserStatus(response.data.detail.vendor_status);
      } catch (err) {
        console.log(err);
      }
    };

    fetchVendors();
  }, [accessToken, userEmail]);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${BASE_API_URI}/api/profile/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken.token}`,
            },
          }
        );
        setProfileInfo(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, [accessToken, userEmail]);

  return (
    <header className="py-3">
      <Navbar expand="lg" className="navbar">
        <Container>
          <LinkContainer to={authTokens ? "/home" : "/"}>
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
                <NavDropdown
                  title="Categories"
                  id="basic-nav-dropdown"
                  className="dropdown-link"
                >
                  <NavDropdown.Item href="/category/accessories">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/category/fashion">
                    Fashion
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/category/food">
                    Food
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/help">
                  <Nav.Link className="nav-text">Help</Nav.Link>
                </LinkContainer>
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
                    <Link
                      to={
                        userStatus
                          ? "/OnClickStartSelling"
                          : "/register_bussiness"
                      }
                    >
                      <Button className="start_selling_btn rounded-pill">
                        + Start Selling{" "}
                      </Button>
                    </Link>
                  </Form>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-toggle-custom"
                    >
                      <img
                        src={BASE_API_URI + profileInfo.image || NoProfileImg}
                        className="profile-img-header"
                        alt="Profile Image"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/onClickProfile">
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link className="nav-text">Login</Nav.Link>
                  </LinkContainer>
                  <Link to="/signup">
                    <Button className="btn start_btn rounded-pill">
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

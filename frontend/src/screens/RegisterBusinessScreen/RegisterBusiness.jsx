import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./registerbusiness.css";
import Design from "../../components/Design/Design";
import { useNavigate } from "react-router-dom";

function RegisterBusiness() {
  const [storeName, setStoreName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (storeName === "" || contact === "" || location === "") {
      alert("Field(s) cannot empty");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="body">
      <Design />
      <div className="register__business">
        <div>
          <Link to="/">
            <img src={logo} className="register__business__logo" alt="logo" />
          </Link>

          <div className="login__header">
            <div className="login__header__title">Let's Know you</div>
            <div className="login__header__subtitle">
              We want to know you more
            </div>
          </div>

          <div className="login__form">
            <Form>
              <label className="login__form__label">Store Name</label>
              <input
                type="text"
                className="login__input"
                id="storeName"
                placeholder="Maxinne Apple Shop"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </Form>

            <Form>
              <label className="login__form__label">Contact</label>
              <input
                type="tel"
                className="login__input"
                id="contact"
                placeholder="0000000000"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form>

            <Form>
              <label className="login__form__label">Location</label>
              <div>
                <input
                  type="text"
                  className="login__input"
                  id="location"
                  placeholder="Jean Nelson"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </Form>
            <Button className="login_btn" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterBusiness;

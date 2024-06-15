import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/Show.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./signup.css";

import Design from "../../components/Design/Design";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    // Validation code
    e.preventDefault();
    if (!email || !password) {
      setError("Field(s) cannot be empty.");
      setShowErrorModal(true);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setShowErrorModal(true);
      return;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        {
          full_name: name,
          email: email,
          password: password,
        }
      );
      localStorage.setItem("token", response.data.key);
      // Should navigate to another page or change state to reflect login
    } catch (err) {
      setError("Invalid credentials");
      setShowErrorModal(true);
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  const handleCloseModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  return (
    <div className="body">
      <Design />
      <div className="signup">
        <div>
          <Link to="/">
            <img src={logo} className="signup__logo" alt="logo" />
          </Link>

          <div className="signup__header">
            <div className="signup__header__title">Get Started</div>
            <div className="signup__header__subtitle">
              Start Selling to peers on Campus
            </div>
          </div>

          <div className="signup__form">
            <Form>
              <label className="signup__form__label">Full Name</label>
              <input
                type="text"
                className="signup__input"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form>

            <Form>
              <label className="signup__form__label">Email</label>
              <input
                type="email"
                className="signup__input"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form>

            <Form>
              <label className="signup__form__label">Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="signup__input"
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={show}
                  className="showIcon"
                  onClick={handleTogglePassword}
                  alt="show/hide password img"
                />
              </div>
            </Form>

            <Modal show={showErrorModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
              </Modal.Header>
              <Modal.Body>{error}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Button className="signup__btn" onClick={handleSubmit}>
              Create Account
            </Button>
          </div>

          <div className="signup__info">
            <p className="signup__info__terms">
              By signing up, you agree to our{" "}
              <a href="/#">Terms of Service & Privacy Policy</a>
            </p>
            <p className="signup__info__login">
              Already have an account? <Link to="/Login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

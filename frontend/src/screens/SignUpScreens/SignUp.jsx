import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/Show.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import Design from "../../components/Design/Design";
import { BASE_API_URI } from "../../utils/constants";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  

  console.log(successMessage)
  

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation code
    if (!name || !email || !password) {
      setError("Field(s) cannot be empty.");
      setShowErrorModal(true);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setShowErrorModal(true);
      return;
    }

    if(password != confirmedPassword){
      setError("Passwords don't match!");
      setShowErrorModal(true);
      return;
    }

    try {
      const response = await axios.post(`${BASE_API_URI}/api/auth/register/`, {
        full_name: name,
        email_address: email,
        password: password
      });
      console.log(response)
      if (response?.data?.status==="success") {
        setSuccessMessage(response?.data);
        setError(successMessage?.detail)
        navigate('/otp');
      }      
    } catch (err) {
      setErrorMessage(err.response.data);
      setError(errorMessage?.detail)
      setShowErrorModal(true);
    }
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
                required
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
                required
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
                  required
                />
                <img
                  src={show}
                  className="showIcon"
                  onClick={handleTogglePassword}
                  alt="show/hide password"
                />
              </div>
            </Form>

            <Form>
              <label className="signup__form__label">Confirm Password</label>
              <div>
                <input
                  type="password"
                  className="signup__input"
                  id="password"
                  placeholder="Confirm password"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  required
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

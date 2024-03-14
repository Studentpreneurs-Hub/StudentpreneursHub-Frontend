import React, { useState } from "react";
import { Row, Button, Container, Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/Show.png";
import './signup.css';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    // Validation code
    if (name === "" || email === "" || password === "") {
      alert("Field(s) cannot be blank");
    }
  };

  return (
    <div>
      <Container className="signup">
        <div>
          <img src={logo} className="signup__logo" alt="logo"/>

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
                  type={showPassword ? 'text' : 'password'}
                  className="signup__input"
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img src={show} className="showIcon" onClick={handleTogglePassword} alt="show/hide password img" />
              </div>
            </Form>

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
              Already have an account? <a href="/#">Log in</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;

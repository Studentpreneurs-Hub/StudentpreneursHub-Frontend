import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/Show.png";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Field(s) cannot be empty");
    }
  };

  return (
    <div>
      <Container className="login">
        <div>
          <img src={logo} className="login__logo" alt="logo" />

          <div className="login__header">
            <div className="login__header__title">Login</div>
            <div className="login__header__subtitle">
              Welcome back! Please enter your details
            </div>
          </div>

          <div className="login__form">
            <Form>
              <label className="login__form__label">Email</label>
              <input
                type="email"
                className="login__input"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form>

            <Form>
              <label className="login__form__label">Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="login__input"
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

            <Button className="login_btn" onClick={handleLogin}>
              Login
            </Button>
          </div>

          <div className="login__info">
            <p className="login__forgotpass__question">
              <Link to="/forgotpassword" style={{ color: "#B6975D" }}>
                Forgot Password?
              </Link>
            </p>
            <p className="login__info__login">
              Don’t have an account yet?{" "}
              <Link to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/Show.png";
import { Link } from "react-router-dom";
import "./login.css";
import Design from "../../components/Design/Design";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import CustomModal from "../../components/CustomModal/CustomModal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Field(s) cannot be empty.");
      setShowErrorModal(true);
      return;
    }

    setLoading(true); // Start loading

    try {
      const userPermissions = await login(email, password);
      if (userPermissions && userPermissions.includes("add_permission")) {
        navigate("/admin-dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert("Failed to log in");
      console.log(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="login_body">
      <Design />
      <div className="login">
        <div>
          <Link to="/">
            <img src={logo} className="login__logo" alt="logo" />
          </Link>

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

            <Button
              className="login_btn rounded-pill"
              onClick={handleLogin}
              disabled={loading} // Disable the button while loading
            >
              {loading ? ( // Show spinner while loading
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Login"
              )}
            </Button>
          </div>

          <CustomModal
            error={error}
            showErrorModal={showErrorModal}
            handleCloseModal={handleCloseModal}
          />

          <div className="login__info">
            <p className="login__forgotpass__question">
              <Link to="/forgotpassword" style={{ color: "#B6975D" }}>
                Forgot Password?
              </Link>
            </p>
            <p className="login__info__login">
              Don’t have an account yet? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

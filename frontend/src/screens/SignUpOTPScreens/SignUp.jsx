import React, { useState } from "react";
import { Row, Button, Container, Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/Show.png";

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
      <Container className="Container">
        <Row className="signup">
          <img src={logo} alt="logo" className="logo" />

          <div className="getting-started">
            <div className="gettting-started-heading">Get Started</div>
            <div className="getting-started-sub">
              Start Selling to peers on Campus
            </div>
          </div>

          <div className="signup-form">
            <Form>
              <label>Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form>

            <Form>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form>

            <Form>
              <label>Password</label>
              <div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img src={show} className="showIcon" onClick={handleTogglePassword} />
              </div>
            </Form>
            <Button className="btn" onClick={handleSubmit}>
              Create Account
            </Button>
          </div>

          <div className="termslogin">
            <p className="terms">
              By signing up, you agree to our{" "}
              <a href="/#">Terms of Service & Privacy Policy</a>
            </p>
            <p className="login">
              Already have an account? <a href="/#">Log in</a>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;

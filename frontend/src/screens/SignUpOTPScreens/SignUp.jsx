import React, { useState } from "react";
import { Row, Button, Container, Form } from "react-bootstrap";
import logo from "../../logo.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {};

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
                // onChange={setEmail}
              />
            </Form>

            <Form>
            <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onChange={setEmail}
              />
            </Form>
          </div>

          <div>
            <Button className="" onClick={handleSubmit}>
              Create Account
            </Button>
          </div>
          <Row className="">
            <span className="">
              By signing up, you agree to our{" "}
              <a href="/#">Terms of Service & Privacy Policy</a>
            </span>
            <span className="">
              Already have an account? <a href="/#">Log in</a>
            </span>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;

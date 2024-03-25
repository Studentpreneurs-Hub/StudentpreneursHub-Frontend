import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { BiSolidShoppingBags } from "react-icons/bi";
import show from "../../assets/Show.png";
import "./setnewpassword.css";

const SetNewPasswordScreen = () => {
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Code:", otpCode);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Container
        className="main-container-new-password"
        sm={12}
        lg={4}
        md={6}
        xl={2}
      >
        <div className="firstRow">
          <div className="logo">
            <BiSolidShoppingBags color="#00A6A6" className="logo-icon" />
            <span className="logo-text">Studentpreneurs HUB</span>
          </div>

          <div className="forgotpassword-text">
            <span className="forgotpassword-question">Set a new password</span>
            <div className="new-password-row">
              <span className="new-password-instructions">
                Your new password must be different to previously used
                passwords.
              </span>
            </div>
          </div>

          <div className="center">
            <div className="otp-textbox">
              <span className="email-text">OTP-Code</span>
              <Form className="form">
                <input
                  type="email"
                  id="otp"
                  // placeholder='name@example.com'
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  // onChange={setEmail}
                />
              </Form>
            </div>

            <div className="new-password-textbox">
              <span className="email-text">New Password</span>
              <Form className="form">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  placeholder="Your Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  // onChange={setEmail}
                />
                <img
                  src={show}
                  className="showPassIcon"
                  onClick={handleTogglePassword}
                  alt="show/hide password img"
                />
              </Form>
            </div>

            <div className="confirm-password-textbox">
              <span className="email-text">Confirm Password</span>
              <Form className="form">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  // onChange={setEmail}
                />
              </Form>
            </div>

            <div>
              <Button className="set-new-password-btn" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SetNewPasswordScreen;

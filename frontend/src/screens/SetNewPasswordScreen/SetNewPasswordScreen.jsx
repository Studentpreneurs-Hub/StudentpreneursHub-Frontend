import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { BiSolidShoppingBags } from "react-icons/bi";
import show from "../../assets/Show.png";
import "./setnewpassword.css";
import logo from '../../assets/logo.png'
import Design from "../../components/Design/Design";

const SetNewPasswordScreen = () => {
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const[confirmShowPass, setConfirmShowPass] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Code:", otpCode);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    
  };

  const handleConfirmTogglePassword = () => {
    setConfirmShowPass(!confirmShowPass)
  }

  return (
    <div className="body">
      <Design />
      <div
        className="main-container-new-password"
        sm={12}
        lg={4}
        md={6}
        xl={2}
      >
        <div className="firstRow">
          <div className="logo">
          <img src={logo} className="login__logo" alt="logo" />
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
              <span className="text-class">OTP-Code</span>
              <Form >
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
              <span className="text-class">New Password</span>
              <Form>
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
              <span className="text-class">Confirm Password</span>

              <Form>
                <input
                  type={confirmShowPass ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  // onChange={setEmail}
                />

                <img
                  src={show}
                  className="showPassIcon"
                  onClick={handleConfirmTogglePassword}
                  alt="show/hide password img"
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
      </div>
    </div>
  );
};

export default SetNewPasswordScreen;

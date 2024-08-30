import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import show from "../../assets/Show.png";
import "./setnewpassword.css";
import logo from "../../assets/logo.png";
import Design from "../../components/Design/Design";
import { useNavigate } from "react-router-dom";
import { BASE_API_URI } from "../../utils/constants";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const SetNewPasswordScreen = () => {
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPass, setConfirmShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords don't match. Please try again.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_API_URI}/api/auth/reset-password-done/`,
        {
          code: otpCode,
          new_password: newPassword,
        }
      );
      console.log(response.data);
      alert("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      alert("Error resetting password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmTogglePassword = () => {
    setConfirmShowPass(!confirmShowPass);
  };

  return (
    <div className="body">
      <Design />
      <div className="main-container-new-password">
        <div className="firstRow">
          <div className="logo">
            <img src={logo} className="login__logo" alt="logo" />
          </div>
          <div className="forgotpassword-text">
            <span className="forgotpassword-question">Set a new password</span>
            <div className="new-password-row">
              <span className="new-password-instructions">
                Your new password must be different from previously used
                passwords.
              </span>
            </div>
          </div>

          <div className="center">
            <div className="otp-textbox">
              <span className="text-class">OTP-Code</span>
              <Form>
                <input
                  type="text"
                  id="otp"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
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
                />
                <img
                  src={show}
                  className="showPassIcon"
                  onClick={handleTogglePassword}
                  alt="show/hide password"
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
                />
                <img
                  src={show}
                  className="showPassIcon"
                  onClick={handleConfirmTogglePassword}
                  alt="show/hide password"
                />
              </Form>
            </div>

            <div>
              <Button
                className="set-new-password-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPasswordScreen;

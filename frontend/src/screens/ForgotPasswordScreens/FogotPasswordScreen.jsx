import React, { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./Forgotpassword.module.css";
import logo from "../../assets/logo.png";
import Design from "../../components/Design/Design";
import { useNavigate } from "react-router-dom";
import { BASE_API_URI } from "../../utils/constants";
import axios from "axios";

function FogotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Field cannot be empty");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_API_URI}/api/auth/reset-password/`,
        { email_address: email }
      );
      console.log(response.data);
      alert("A verification code has been sent to your email.");
      navigate("/reset-password");
    } catch (error) {
      alert("Error sending email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.body}>
      <Design />
      <div className={styles.mainContainer}>
        <div className={styles.firstRow}>
          <div className="logo">
            <img src={logo} className="login__logo" alt="logo" />
          </div>

          <div className={styles.forgotpasswordText}>
            <span className={styles.forgotpasswordQuestion}>
              Forgot Password?
            </span>
            <div className={styles.instructionRow}>
              <span className={styles.resetInstructions}>
                No worries, we'll send you reset instructions.
              </span>
            </div>
          </div>

          <div className={styles.forgotpasswordTextbox}>
            <span className={styles.emailText}>E-mail</span>
            <Form className={styles.form}>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form>
          </div>

          <div>
            <Button
              className={styles.forgotPasswordBtn}
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

          <div className={styles.rememberpasswordQuestionRow}>
            <span className={styles.rememberpasswordQuestion}>
              Remember your password?{" "}
              <Link
                to="/Login"
                style={{ color: "#B6975D", fontWeight: "bolder" }}
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FogotPasswordScreen;

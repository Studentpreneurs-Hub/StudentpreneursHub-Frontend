import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./Forgotpassword.module.css";
import logo from '../../assets/logo.png';

function FogotPasswordScreen() {
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    if (email === ""){
      alert("Field cannot be empty")
    }
  };
  return (
    <div className={styles.body}>
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
            <Form c lassName={styles.form}>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onChange={setEmail}
              />
            </Form>
          </div>

          <div>
            <Button className={styles.forgotPasswordBtn} onClick={handleSubmit}>
              Submit
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

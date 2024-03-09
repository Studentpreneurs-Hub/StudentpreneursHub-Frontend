import React, { useState } from "react";
import { Row, Button, Container, Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import './otp.css'

const OTPScreen = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  const [number6, setNumber6] = useState("");

  const handleSubmit = (e) => {
    // Validation code

    if (
      number1 === "" ||
      number2 === "" ||
      number3 === "" ||
      number4 === "" ||
      number5 === "" ||
      number6 === ""
    ) {
      alert("Field(s) can't be blank");
    } else {
      alert(
        `${number1} ${number2} ${number3} ${number4} ${number5} ${number6}`
      );
    }
  };

  return (
    <>
      <Container className="Container Verify">
        <Row>
          <img src={logo} alt="logo" className="logo" />

          <div className="verify">
            <div className="verify-heading">Check your email</div>
            <div className="verify-sub">
              Enter the 6 digit code sent to <span>nathan@gmail.com</span> to
              verify your account.
            </div>
          </div>

          <div className="verify-form">
            <Form className="boxes">
              <input
                type="text"
                id="number1"
                value={number1}
                inputMode="numeric"
                maxLength={1}
                onChange={(e) =>
                  setNumber1(!isNaN(e.target.value) ? e.target.value : "")
                }
              />
              <input
                type="text"
                id="number2"
                value={number2}
                inputMode="numeric"
                maxLength={1}
                onChange={(e) =>
                  setNumber2(!isNaN(e.target.value) ? e.target.value : "")
                }
              />
              <input
                type="text"
                id="number3"
                value={number3}
                inputMode="numeric"
                maxLength={1}
                onChange={(e) =>
                  setNumber3(!isNaN(e.target.value) ? e.target.value : "")
                }
              />
              <input
                type="text"
                id="number4"
                value={number4}
                inputMode="numeric"
                maxLength={1}
                onChange={(e) =>
                  setNumber4(!isNaN(e.target.value) ? e.target.value : "")
                }
              />
              <input
                type="text"
                id="number5"
                value={number5}
                inputMode="numeric"
                maxLength={1}
                onChange={(e) =>
                  setNumber5(!isNaN(e.target.value) ? e.target.value : "")
                }
              />
              <input
                type="text"
                id="number6"
                value={number6}
                inputMode="numeric"
                maxLength={1}
                onChange={(e) =>
                  setNumber6(!isNaN(e.target.value) ? e.target.value : "")
                }
              />
            </Form>
          </div>
          <Button className="btn verify-btn" onClick={handleSubmit}>
            Verify
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default OTPScreen;

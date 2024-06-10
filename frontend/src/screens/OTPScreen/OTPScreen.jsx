import React, { useState } from "react";
import { Row, Button, Container, Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./otp.css";
import Design from "../../components/Design/Design";

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
    <div className="body">
      <Design />
      <div className="verify">
        <div>
          <img src={logo} alt="logo" className="verify__logo" />

          <div className="verify__header">
            <div className="verify__header__title">Check your email</div>
            <div className="verify__header__subtitle">
              Enter the 6 digit code sent to <span>nathan@gmail.com</span> to
              verify your account.
            </div>
          </div>

          <div className="verify__form">
            <Form className="verify__form__boxes">
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
          <div className="verify__info">
            <p className="verify__info__resend">
              OTP not received? <a href="#">Resend now</a>
            </p>
            <Button className="verify__btn" onClick={handleSubmit}>
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPScreen;

import React, { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./registerbusiness.css";
import Design from "../../components/Design/Design";
import { BASE_API_URI } from "../../utils/constants";
import CustomModal from "../../components/CustomModal/CustomModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterBusiness() {
  const [storeName, setStoreName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const handleCloseModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  const handleGetStarted = async () => {
    if (storeName === "" || contact === "" || location === "" || description === "") {
      setError("Field(s) cannot be empty.");
      setShowErrorModal(true);
      return;
    }

    setIsLoading(true); // Set loading to true

    try {
      const response = await axios.post(
        `${BASE_API_URI}/api/vendors/`,
        {
          phone_number: contact,
          location: location,
          store_name: storeName,
          store_desc: description,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      setError(
        "There was an error registering your business. Please try again."
      );
      setShowErrorModal(true);
    } finally {
      setIsLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <div className="get_started_body">
      <Design />
      <div className="register__business">
        <div>
          <Link to="/">
            <img src={logo} className="register__business__logo" alt="logo" />
          </Link>

          <div className="login__header">
            <div className="login__header__title">Let's Know you</div>
            <div className="login__header__subtitle">
              We want to know you more
            </div>
          </div>

          <div className="login__form">
            <Form>
              <label className="login__form__label">Store Name</label>
              <input
                type="text"
                className="login__input"
                id="storeName"
                placeholder="Maxinne Apple Shop"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </Form>
            <Form>
              <label className="login__form__label">Store Description</label>
              <input
                type="text"
                className="login__input"
                id="storeDescription"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form>

            <Form>
              <label className="login__form__label">Contact</label>
              <input
                type="tel"
                className="login__input"
                id="contact"
                placeholder="0000000000"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form>

            <Form>
              <label className="login__form__label">Location</label>
              <div>
                <input
                  type="text"
                  className="login__input"
                  id="location"
                  placeholder="Jean Nelson"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </Form>
            <Button className="login_btn rounded-pill" onClick={handleGetStarted} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </>
              ) : (
                "Get Started"
              )}
            </Button>

            <CustomModal
              error={error}
              showErrorModal={showErrorModal}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterBusiness;

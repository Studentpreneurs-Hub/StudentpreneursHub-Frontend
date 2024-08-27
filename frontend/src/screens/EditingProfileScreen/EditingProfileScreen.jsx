import React, { useState, useEffect } from "react";
import "../EditingProfileScreen/EditingProfileScreen.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import profileImgPlaceholder from "../../assets/no-profile-picture.png";
import { BASE_API_URI } from "../../utils/constants";
import CustomModal from "../../components/CustomModal/CustomModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditingProfileScreen = () => {
  const [updateName, SetUpdateName] = useState("");
  const [updateStoreName, SetUpdateStoreName] = useState("");
  const [updateLocation, SetUpdateLocation] = useState("");
  const [updateContact, SetUpdateContact] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [profileImg, setProfileImg] = useState(profileImgPlaceholder); // State for profile image
  const [selectedFile, setSelectedFile] = useState(null); // State for selected file

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const handleCloseModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setProfileImg(URL.createObjectURL(file)); // Update image preview
    }
  };

  const handleDeleteImage = () => {
    setProfileImg(profileImgPlaceholder);
    setSelectedFile(null);
  };

  const updateInfo = async () => {
    if (
      updateName === "" ||
      updateStoreName === "" ||
      updateContact === "" ||
      updateLocation === ""
    ) {
      setError("Field(s) cannot be empty.");
      setShowErrorModal(true);
      return;
    }

    setIsLoading(true); // Set loading to true

    const formData = new FormData();
    formData.append("full_name", updateName);
    formData.append("contact", updateContact);
    formData.append("store_name", updateStoreName);
    formData.append("location", updateLocation);
    if (selectedFile) {
      formData.append("image", selectedFile); // Append the selected file to the form data
    }

    try {
      const response = await axios.post(
        `${BASE_API_URI}/api/profile/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      navigate("/onClickProfile");
    } catch (error) {
      console.error("Error:", error);
      setError("There was an error updating your profile. Please try again.");
      setShowErrorModal(true);
    } finally {
      setIsLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <>
      <Header />
      <Container className="Edit">
        <div className="edit--img">
          <img className="profile-img" src={profileImg} alt="Profile Img" />
          <span className="edit--btns">
            <Button
              className="edit-btn"
              variant="outline-dark rounded-pill"
              onClick={() =>
                document.getElementById("upload-profile-img").click()
              }
            >
              Upload New Picture
            </Button>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="upload-profile-img"
              onChange={handleFileChange}
            />
            <Button
              className="edit-btn"
              variant="outline-dark rounded-pill"
              onClick={handleDeleteImage}
              disabled={profileImg === profileImgPlaceholder}
            >
              Delete
            </Button>
          </span>
        </div>

        <div className="personal--info mt-5">
          <p className="info--heading">Personal Information</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form--name">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Maxwell Ansah"
                value={updateName}
                onChange={(e) => SetUpdateName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="form--name">Store Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Maxmine Apple Deals"
                value={updateStoreName}
                onChange={(e) => SetUpdateStoreName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="form--name">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jean Nelson Hall"
                value={updateLocation}
                onChange={(e) => SetUpdateLocation(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>

        <div className="contact--info mt-3">
          <p className="info--heading">Contact Information</p>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Contact
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="contact--form"
                type="tel"
                placeholder="Phone Number"
                value={updateContact}
                onChange={(e) => SetUpdateContact(e.target.value)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="update--btn">
          <Button
            className="update--btn--save rounded-pill"
            onClick={updateInfo}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Profile"}
          </Button>
          <Button className="update--btn-cancel rounded-pill">Cancel</Button>
        </div>
        <CustomModal
          error={error}
          showErrorModal={showErrorModal}
          handleCloseModal={handleCloseModal}
        />
      </Container>
      <Footer />
    </>
  );
};

export default EditingProfileScreen;

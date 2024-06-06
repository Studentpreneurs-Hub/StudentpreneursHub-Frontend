import "../EditingProfileScreen/EditingProfileScreen.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer/Footer";
import profileImg from "../../assets/profile_picture.png";

const EditingProfileScreen = () => {
  const [updateName, SetUpdateName] = useState("");
  const [updateStoreName, SetUpdateStoreName] = useState("");
  const [updateLocation, SetUpdateLocation] = useState("");
  const [updateContact, SetUpdateContact] = useState("");
  const [updateWhatsapp, SetUpdateWhatsapp] = useState("");
  const [updateInstagram, SetUpdateInstagram] = useState("");
  const [updateFacebook, SetUpdateFacebook] = useState("");

  const updateInfo = () => {
    alert(updateName);

    // Will do form validation next
  };

  return (
    <>
      <Container className="Edit">
        <div className="edit--img">
          <img className="profile-img" src={profileImg} alt="Profile Img" />
          <span className="edit--btns">
            <Button className="edit-btn" variant="outline-dark">
              Update New Picture
            </Button>
            <Button className="edit-btn" variant="outline-dark">
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
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Whatsapp
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="contact--form"
                type="tel"
                placeholder="Phone Number"
                value={updateWhatsapp}
                onChange={(e) => SetUpdateWhatsapp(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Instagram
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="contact--form"
                type="tel"
                placeholder="User Name"
                value={updateInstagram}
                onChange={(e) => SetUpdateInstagram(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Facebook
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="contact--form"
                type="tel"
                placeholder="User Name"
                value={updateFacebook}
                onChange={(e) => SetUpdateFacebook(e.target.value)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="update--btn">
          <Button className="update--btn--save" onClick={updateInfo}>
            Save Profile
          </Button>
          <Button className="update--btn-cancel">Cancel</Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default EditingProfileScreen;

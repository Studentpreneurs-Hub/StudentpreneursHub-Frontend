import "../EditingProfileScreen/EditingProfileScreen.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profileImg from "../../assets/profile_picture.png";

const EditingProfileScreen = () => {
  return (
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
        <p>Personal Information</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Maxwell Ansah" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Store Name</Form.Label>
            <Form.Control type="text" placeholder="Maxmine Apple Deals" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Jean Nelson Hall" />
          </Form.Group>
        </Form>
      </div>

      <div className="contact--info mt-3">
        <p>Contact Information</p>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Contact
          </Form.Label>
          <Col sm="10">
            <Form.Control type="tel" placeholder="Phone Number" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Whatsapp
          </Form.Label>
          <Col sm="10">
            <Form.Control type="tel" placeholder="Phone Number" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
          Instagram
          </Form.Label>
          <Col sm="10">
            <Form.Control type="tel" placeholder="Phone Number" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Facebook
          </Form.Label>
          <Col sm="10">
            <Form.Control type="tel" placeholder="Phone Number" />
          </Col>
        </Form.Group>
      </div>
    </Container>
  );
};

export default EditingProfileScreen;

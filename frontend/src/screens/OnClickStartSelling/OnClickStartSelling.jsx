import "../OnClickStartSelling/OnClickStartSelling.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";

const OnClickStartSelling = () => {
  const [updateProductName, SetUpdateProductName] = useState("");
  const [updatePrice, SetUpdatePrice] = useState("");
  const [updateDescription, SetUpdateDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const updateInfo = () => {
    alert(updateProductName);
  };

  const categories = ["Electronics", "Fashion", "Cosmetics", "Stationeries"]; // Category options
  const conditions = ["Brand New", "Slightly Used"]; // Condition options

  return (
    <>
      <Header />
      <Container className="StartSelling">
        <div className="personal--info mt-3">
          <p className="info--heading">Product Details</p>
          <p className="info--subheading mb-4">
            Provide insights about your product. This helps buyers understand the
            product and its state better.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form--name">Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kingsley's Phones"
                value={updateProductName}
                onChange={(e) => SetUpdateProductName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form--name">Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="GHS"
                value={updatePrice}
                onChange={(e) => SetUpdatePrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="form--name">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describe your product..."
                value={updateDescription}
                onChange={(e) => SetUpdateDescription(e.target.value)}
              />
            </Form.Group>

            {/* CATEGORY DROPDOWN */}
            <Form.Group className="mb-3">
              <Form.Label className="form--name">Category</Form.Label>
              <Form.Select
                aria-label="Category dropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {/* END OF CATEGORY DROPDOWN */}

            {/* CONDITION DROPDOWN */}
            <Form.Group className="mb-3">
              <Form.Label className="form--name">Condition</Form.Label>
              <Form.Select
                aria-label="Condition dropdown"
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
              >
                <option value="">Select Condition</option>
                {conditions.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {/* END OF CONDITION DROPDOWN */}

          </Form>
        </div>

        {/* APPROVAL BUTTON */} 
        <div className="approval--btn mt-4">
          <Button className="approval--btn--save px-5" onClick={updateInfo}>
            Submit For Approval
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OnClickStartSelling;
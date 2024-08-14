import "../OnClickStartSelling/OnClickStartSelling.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import CustomModal from "../../components/CustomModal/CustomModal";
import { BASE_API_URI } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiTrash2 } from "react-icons/fi";

const OnClickStartSelling = () => {
  const [updateProductName, SetUpdateProductName] = useState("");
  const [updatePrice, SetUpdatePrice] = useState("");
  const [updateDescription, SetUpdateDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const fileInputRef = useRef(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input value
    }
  };

  const validateForm = () => {
    if (
      !updateProductName ||
      !updatePrice ||
      !updateDescription ||
      !selectedCategory ||
      !selectedCondition ||
      !selectedImage
    ) {
      setError("Field(s) cannot be empty.");
      setShowErrorModal(true);
      return false;
    }
    return true;
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateInfo = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("product_name", updateProductName);
    formData.append("product_desc", updateDescription);
    formData.append("product_price", updatePrice);
    formData.append("product_condition", selectedCondition);
    formData.append("product_category", selectedCategory);
    formData.append("product_image", selectedImage);

    try {
      const response = await axios.post(
        `${BASE_API_URI}/api/products/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );
      alert("Product submitted successfully!")
      console.log("Response:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("There was an error uploading the product!", error);
      console.log("Error details: ", error.response);
      setError("Failed to submit product.");
      setShowErrorModal(true);
    }
  };

  const categories = ["accessories", "food", "fashion"]; // Category options
  const conditions = ["New", "Used"]; // Condition options

  return (
    <>
      <Header />
      <Container className="StartSelling">
        <div className="personal--info mt-3">
          <p className="info--heading">Product Details</p>
          <p className="info--subheading mb-4">
            Provide insights about your product. This helps buyers understand
            the product and its state better.
          </p>
          <Form onSubmit={updateInfo}>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
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

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="form--name">Product Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
                id="formFile"
                ref={fileInputRef}
              />
            </Form.Group>
          </Form>
          {selectedImage && (
            <div className="image-preview-container">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="img-thumbnail mt-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <FiTrash2 className="delete-icon" onClick={handleImageRemove} />
            </div>
          )}
        </div>
        <Button
          type="submit"
          onClick={updateInfo}
          className="approval--btn--save px-5"
        >
          Submit For Approval
        </Button>
      </Container>
      <Footer />
      <CustomModal
        error={error}
        showErrorModal={showErrorModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default OnClickStartSelling;

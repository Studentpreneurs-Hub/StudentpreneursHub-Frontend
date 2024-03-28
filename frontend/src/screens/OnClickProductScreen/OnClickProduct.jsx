import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./onClickProduct.css";
import back from "../../assets/iphone12-bk.jpg";
import front from "../../assets/iphone12-fr.jpg";
import side from "../../assets/iphone12-sd.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function OnClickProduct() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [back, front, side];
  const changeImage = (index) => {
    setCurrentImage(index);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Row>
        <h2>Iphone 12 Pro Max</h2>
        <Col>
          <div className="slider">
            <img
              src={images[currentImage]}
              alt={`Slide ${currentImage}`}
              style={{ width: "700px" }}
            />
            <div className="navigation">
              <button onClick={prevImage}>
                <SlArrowLeft />
              </button>
              <button onClick={nextImage}>
                <SlArrowRight />
              </button>
            </div>
          </div>
          <div className="thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => changeImage(index)}
                className={index === currentImage ? "active" : ""}
                style={{ width: "100px" }}
              />
            ))}
          </div>
        </Col>
        <Col>I Love God</Col>
      </Row>
    </div>
  );
}

export default OnClickProduct;

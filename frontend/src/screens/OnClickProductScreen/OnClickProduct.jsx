import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./onClickProduct.css";
import back  from "../../assets/iphone12-bk.jpg";
import front from "../../assets/iphone12-fr.jpg";
import side from "../../assets/iphone12-sd.jpg";

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
        <Col>
          <div className="slider" style={{ width: "100px" }}>
            <img
              src={images[currentImage]}
              alt={`Slide ${currentImage}`}
              style={{ width: "100px" }}
            />
            <div className="navigation">
              <button onClick={prevImage}>&lt;</button>
              <button onClick={nextImage}>&gt;</button>
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

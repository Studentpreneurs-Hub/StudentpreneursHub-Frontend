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
        <div>
            <div>
                <div>
                    <img src={images[currentImage]} alt="" style={{width:'716px'}}/>
                </div>
                <div>
                    {}
                </div>
            </div>
            <div>World</div>
        </div>
    </div>
  );
}

export default OnClickProduct;

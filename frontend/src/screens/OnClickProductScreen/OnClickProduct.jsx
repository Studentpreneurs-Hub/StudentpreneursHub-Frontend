import React, { useState } from "react";
import "./onClickProduct.css";
import back from "../../assets/iphone12-bk.jpg";
import front from "../../assets/iphone12-fr.jpg";
import side from "../../assets/iphone12-sd.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import sheldon from "../../assets/sheldon.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
      <Header />
      <div className="product_details_main_div">
        <div>
          <h3 className="product_name">Iphone 12 pro max</h3>
          <div className="product_img">
            <img
              src={images[currentImage]}
              alt=""
              style={{ width: "590px", height: "365px" }}
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
                alt={`thumbnail ${index}`}
                width={150.43}
                height={95.42}
                onClick={() => changeImage(index)}
                className={index === currentImage ? "active" : ""}
              />
            ))}
          </div>
        </div>
        <div className="personal_card">
          <div className="contact_details_card">
            <img
              src={sheldon}
              alt=""
              style={{ clipPath: "circle()", width: "57px" }}
            />
            <div>
              <h5 className="store_name">Maxine Apple Store</h5>
              <span className="contact_name">Gideon Maxi Appiah</span>
            </div>
          </div>
          <div className="social_icons">
            <FaTwitter size={20} />
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
      </div>
      <div className="product_text_details">
        <h5>Description</h5>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod libero id ante malesuada, ac efficitur lorem mollis. Phasellus
          vitae erat ut turpis posuere finibus ac nec sapien. Duis sed sapien
          nec ipsum feugiat lacinia. Vestibulum at convallis mauris. Fusce ut
          ante vitae nisl hendrerit scelerisque. Suspendisse potenti. Integer
          auctor justo nec augue vehicula, at varius nisl
        </span>

        <h5>Price</h5>
        <span>GHC 5,000,000.00</span>

        <h5>Category</h5>
        <span>Electronics</span>

        <h5>Condition</h5>
        <span>Used</span>
      </div>
      <Footer />
    </div>
  );
}

export default OnClickProduct;

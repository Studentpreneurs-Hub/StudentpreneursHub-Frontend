import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API_URI } from "../../utils/constants";

function OnClickProduct() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [back, front, side];
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  const changeImage = (index) => {
    setCurrentImage(index);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_API_URI}/api/products/pending/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken.token}`,
            },
          }
        );
        setProduct(response.data.detail);
        console.log(product);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProductDetails();
  }, [id, accessToken]);

  // if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="product_details_main_div">
        <div>
          <h3 className="product_name">{product.product_name}</h3>
          <div className="product_img">
            <img
              src={images[currentImage]}
              alt={product.product_name}
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
              <span className="contact_name">{product.user.full_name}</span>
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
        <h5 className="desc_heading">Description</h5>
        <div className="desc_">
          <span className="desc_text">{product.product_desc}</span>
        </div>
        <h5 className="desc_heading">Price</h5>
        <span className="desc_text">GHC {product.product_price}</span>

        <h5 className="desc_heading">Category</h5>
        <span className="desc_text">{capitalizeFirstLetter(product.product_category)}</span>

        <h5 className="desc_heading">Condition</h5>
        <span className="desc_text">{product.product_condition}</span>
      </div>
      <Footer />
    </div>
  );
}

export default OnClickProduct;

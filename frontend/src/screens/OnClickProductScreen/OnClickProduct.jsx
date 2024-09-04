import React, { useState, useEffect } from "react";
import "./onClickProduct.css";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import noprofile from "../../assets/no-profile-picture.png";
import { FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API_URI } from "../../utils/constants";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

function OnClickProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const { authTokens } = useAuth();
  const [showNumber, setShowNumber] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${BASE_API_URI}/api/product/${id}/`, {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        });
        setProduct(response.data.detail);
        console.log(product);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProductDetails();
  }, [id, accessToken]);

  const approveProduct = async (id) => {
    try {
      const response = await axios.post(
        `${BASE_API_URI}/api/product/approve/`,
        {
          id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );

      alert("Product has been approved successfully.");
      console.log("Response:", response.data);
      navigate("/admin-dashboard");
    } catch (error) {
      alert("Approval of product failed.");
      console.error("Error approving product:", error.response.data);
    }
  };

  const declineProduct = async (id) => {
    try {
      const response = await axios.post(
        `${BASE_API_URI}/api/product/decline/`,
        {
          id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );

      console.log("Response:", response.data);
      alert("Product has been declined successfully.");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error declining product:", error);
    }
  };

  const showPhoneNumber = () => {
    setShowNumber(!showNumber);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="product_details_main_div">
        <div>
          <h3 className="product_name">{product.product_name}</h3>
          <div className="product_img">
            <img
              src={BASE_API_URI + product.product_image}
              alt={product.product_name}
              style={{ width: "590px", height: "365px" }}
            />
          </div>
        </div>
        <div className="personal_card">
          <div className="contact_details_card">
            <img
              src={noprofile}
              alt=""
              style={{ clipPath: "circle()", width: "57px" }}
            />
            <div>
              <h5 className="store_name">{product.vendor?.store_name}</h5>
              <span className="contact_name">{product.user?.full_name}</span>
            </div>
          </div>
          <div className="social_icons">
            <FaPhone size={20} onClick={showPhoneNumber} />{" "}
            <a
              href={"tel:"+product.vendor?.phone_number}
              style={{ fontWeight: "700", textDecoration: "none" }}
            >
              {showNumber && product.vendor?.phone_number}
            </a>
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
        <span className="desc_text">{product.product_category}</span>

        <h5 className="desc_heading">Condition</h5>
        <span className="desc_text">{product.product_condition}</span>

        <div>
          {authTokens.user.email_address === "studentprenuer01@gmail.com" && (
            <div className="approval">
              <button
                className="btn btn-success rounded-pill mr-2"
                onClick={() => approveProduct(product.id)}
              >
                Approve
              </button>
              <button
                className="btn btn-danger rounded-pill"
                onClick={() => declineProduct(product.id)}
              >
                Decline
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OnClickProduct;

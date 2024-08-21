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
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

function OnClickProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const { authTokens } = useAuth();
  const [vendorInfo, setVendorInfo] = useState({});
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

  const fetchVendorInfo = async (email_address, setter) => {
    try {
      const response = await axios.get(
        `${BASE_API_URI}/api/vendors/${email_address}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );
      console.log(response.data.detail.user.email_address);
      setter(response.data.detail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchVendorInfo(product.user?.email_address, setVendorInfo);
    }
  }, [accessToken]);

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
              src={sheldon}
              alt=""
              style={{ clipPath: "circle()", width: "57px" }}
            />
            <div>
              {/* Check if vendorInfo.user exists before accessing properties */}
              <h5 className="store_name">{vendorInfo.store_name}</h5>
              {vendorInfo.user && (
                <span className="contact_name">
                  {vendorInfo.user.full_name}
                </span>
              )}
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

import { useState, useEffect } from "react";
import { Container, Button, Dropdown, Tabs, Tab } from "react-bootstrap";
import "../OnClickProfile/OnClickProfile.css";
import default_profile_img from "../../assets/no-profile-picture.png";
import {
  RiPhoneFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import ProductCard from "../../components/ProductCard/productcard";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { BASE_API_URI } from "../../utils/constants";
import axios from "axios";

const OnClickProfile = () => {
  const { authTokens } = useAuth();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const [pendingProducts, setPendingProducts] = useState([]); // State to store pending products
  const [activeProducts, setActiveProducts] = useState([]); // State to store active products
  const [declineProducts, setDeclineProducts] = useState([]); // State to store active products
  const [userProducts, setUserProducts] = useState([]); // State to store user's products
  const [vendorInfo, setVendorInfo] = useState({}); // Initialize as an empty object
  const [profileInfo, setProfileInfo] = useState({}); // Initialize as an empty object

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const fetchProducts = async (endpoint, setter) => {
    try {
      const response = await axios.get(
        `${BASE_API_URI}/api/product/${endpoint}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );
      setter(response.data.detail);
    } catch (err) {
      console.log(err);
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
      console.log(response.data.detail);
      setter(response.data.detail);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfileInfo = async (setter) => {
    try {
      const response = await axios.get(
        `${BASE_API_URI}/api/profile/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );
      console.log(response.data.data);
      setter(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  function formatServerDate(dateString, locale = 'default') {
    const date = new Date(dateString);
    const month = date.toLocaleString(locale, { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  }
  

  useEffect(() => {
    if (accessToken) {
      fetchProducts("pending", setPendingProducts);
      fetchProducts("active", setActiveProducts);
      fetchProducts("declined", setDeclineProducts);
      fetchVendorInfo(authTokens.user.email_address, setVendorInfo);
      fetchProfileInfo(setProfileInfo);
    }
  }, [accessToken]);

  useEffect(() => {
    if (pendingProducts.length > 0 || activeProducts.length > 0) {
      const filteredProducts = [...pendingProducts, ...activeProducts].filter(
        (product) =>
          product.user.email_address === authTokens.user.email_address
      );
      setUserProducts(filteredProducts);
    }
  }, [pendingProducts, activeProducts, authTokens.user.email_address]);

  const toEditProfile = () => {
    navigate("/EditingProfileScreen");
  };

  return (
    <>
      <Header />
      <Container className="profile">
        <div className="profile__header">
          <img
            src={BASE_API_URI + profileInfo.image || default_profile_img}
            alt="profile picture"
            className="profile__header__img"
          />
          <div className="profile__header__info">
            <h2 className="profile__header__info__company">
              {vendorInfo.store_name || "Store Name"}
            </h2>
            <p className="profile__header__info__name">
              {vendorInfo.user?.full_name || "Full Name"}
            </p>
            <ul className="profile__header__info_socials">
              <li className="socials">
                <a href={`tel:${vendorInfo.phone_number || ""}`}>
                  <RiPhoneFill />
                </a>
              </li>
              <li>
                <Link to="/EditingProfileScreen">
                  <Button
                    variant="outline-dark"
                    onClick={toEditProfile}
                    className="profile__edit__btn"
                  >
                    Edit Profile
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="Profile__tabs">
          <Tabs
            defaultActiveKey="active"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="active" title="Active">
              <div className="product__listings">
                {activeProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
                ))}
              </div>
            </Tab>
            <Tab eventKey="pending" title="Pending">
              <div className="product__listings">
                {pendingProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
                ))}
              </div>
            </Tab>
            <Tab eventKey="declined" title="Declined">
              <div className="product__listings">
                {declineProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
                ))}
              </div>
            </Tab>
            <Tab eventKey="Draft" title="Products">
              <div className="product__listings">
                {userProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
                ))}
              </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <div className="Store-profile">
                <div className="Store">
                  <p className="Store__heading">Store Description</p>
                  <p className="Store__description">
                    {vendorInfo.store_desc || "Store Description"}
                  </p>
                </div>

                <div className="Store-socials">
                  <p className="Store-socials__heading">Share Store Profile</p>
                  <ul className="Store-social__list">
                    <li className="Store-social__list__item">
                      <a href="">
                        <RiPhoneFill />
                      </a>
                    </li>
                  </ul>
                  <div className="Store-location">
                    <p>
                      <CiLocationOn /> {vendorInfo.location || "Location"}
                    </p>
                    <p>
                      <BsPerson />
                      Member since {formatServerDate(vendorInfo.created_at)}
                    </p>
                  </div>
                </div>

                <div className="Store-contact">
                  <p className="Store-contact__heading">Contact Information</p>
                  <ul className="Store-contact__list">
                    <li className="Store-contact__list__items">
                      {" "}
                      <span>
                        <RiPhoneFill />
                      </span>{" "}
                      <a href={`tel:${vendorInfo.phone_number || ""}`}>Call</a>
                    </li>
                    <li className="Store-contact__list__items">
                      {" "}
                      <span>
                        <RiWhatsappFill />{" "}
                      </span>
                      <a
                        href={`https://wa.me/${vendorInfo.phone_number || ""}`}
                        target="_blank"
                      >
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Tab>
          </Tabs>
          <Dropdown className="dropdown__custom">
            <Dropdown.Toggle
              variant="outline-dark"
              className="profile__dropdown"
              id="dropdown-basic"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Accessories</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OnClickProfile;

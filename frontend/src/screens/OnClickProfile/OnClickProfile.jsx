import { useState, useEffect } from "react";
import { Container, Button, Dropdown, Tabs, Tab } from "react-bootstrap";
import "../OnClickProfile/OnClickProfile.css";
import pic from "../../assets/profile_picture.png";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiInstagramFill,
  RiFacebookFill,
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

  useEffect(() => {
    if (accessToken) {
      fetchProducts("pending", setPendingProducts);
      fetchProducts("active", setActiveProducts);
      fetchProducts("declined", setDeclineProducts);
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
            src={pic}
            alt="profile picture"
            className="profile__header__img"
          />
          <div className="profile__header__info">
            <h2 className="profile__header__info__company">
              {authTokens.user.full_name}
            </h2>
            <p className="profile__header__info__name">Gideon Maxi Appiah</p>
            <ul className="profile__header__info_socials">
              <li className="socials">
                <a href="#">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam euismod libero id ante malesuada, ac efficitur lorem
                    mollis. Phasellus vitae erat ut turpis posuere finibus ac
                    nec sapien. Duis sed sapien nec ipsum feugiat lacinia.
                    Vestibulum at convallis mauris. Fusce ut ante vitae nisl
                    hendrerit scelerisque. Suspendisse potenti. Integer auctor
                    justo nec augue vehicula, at varius nisl
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
                      <CiLocationOn /> Jean Nelson Hall
                    </p>
                    <p>
                      <BsPerson />
                      Member since Nov 2023
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
                      <a href="tel:+">Call</a>
                    </li>
                    <li className="Store-contact__list__items">
                      {" "}
                      <span>
                        <RiWhatsappFill />{" "}
                      </span>
                      <a href="">WhatsApp</a>
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
              <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Stationary</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OnClickProfile;

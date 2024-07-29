import { Container, Button, Dropdown, Tabs, Tab } from "react-bootstrap";
import "../OnClickProfile/OnClickProfile.css";
import pic from "../../assets/profile_picture.png";
import product1 from "../../assets/bicycle.png";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
} from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import ProductCard from "../../components/ProductCard/productcard";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const OnClickProfile = () => {
  return (
    <>
      <Container className="profile">
        <div className="profile__header">
          <img
            src={pic}
            alt="profile picture"
            className="profile__header__img"
          />
          <div className="profile__header__info">
            <h2 className="profile__header__info__company">
              Maxmine Apple Deals
            </h2>
            <p className="profile__header__info__name">Gideon Maxi Appiah</p>
            <ul className="profile__header__info_socials">
              <li className="socials">
                <a href="#">
                  <RiPhoneFill />
                </a>
              </li>
              <li className="socials">
                <a href="#">
                  <RiWhatsappFill />
                </a>
              </li>
              <li className="socials">
                <a href="#">
                  <RiInstagramFill />
                </a>
              </li>
              <li className="socials">
                <a href="#">
                  <RiFacebookFill />
                </a>
              </li>
              <li>
                <Link to='/EditingProfileScreen'>
                  <Button variant="outline-dark" className="profile__edit__btn">
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
                <ProductCard
                  productImg={product1}
                  productCardTitle="Women Bike for age 21"
                  productPrice="300"
                />
                <ProductCard
                  productImg={product1}
                  productCardTitle="Women Bike for age 21"
                  productPrice="300"
                />
                <ProductCard
                  productImg={product1}
                  productCardTitle="Women Bike for age 21"
                  productPrice="300"
                />
                <ProductCard
                  productImg={product1}
                  productCardTitle="Women Bike for age 21"
                  productPrice="300"
                />
              </div>
            </Tab>
            <Tab eventKey="pending" title="Pending">
              Tab content for Pending
            </Tab>
            <Tab eventKey="declined" title="Declined">
              Tab content for Declined
            </Tab>
            <Tab eventKey="Draft" title="Products">
              Tab content for Draft
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
                    <li className="Store-social__list__item">
                      <a href="">
                        <RiTwitterFill />
                      </a>
                    </li>
                    <li className="Store-social__list__item">
                      <a href="">
                        <RiFacebookFill />
                      </a>
                    </li>
                    <li className="Store-social__list__item">
                      <a href="">
                        <RiInstagramFill />
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
                    <li className="Store-contact__list__items">
                      {" "}
                      <span>
                        <RiInstagramFill />
                      </span>{" "}
                      <a href="">Instagram</a>
                    </li>
                    <li className="Store-contact__list__items">
                      {" "}
                      <span>
                        <RiFacebookFill />
                      </span>{" "}
                      <a href="">Facebook</a>
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

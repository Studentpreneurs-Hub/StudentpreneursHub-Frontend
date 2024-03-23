import { Container, Button } from "react-bootstrap";
import "../OnClickProfile/OnClickProfile.css";
import pic from "../../assets/profile_picture.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";

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
                <Button variant="outline-dark" className="profile__edit--btn">
                  Edit Profile
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="Profile__tabs">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default OnClickProfile;

import { Container, Button, Dropdown, Tabs, Tab } from "react-bootstrap";
import "../OnClickProfile/OnClickProfile.css";
import pic from "../../assets/profile_picture.png";
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
                <Button variant="outline-dark" className="profile__edit__btn">
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
            <Tab eventKey="active" title="Active">
              Tab content for Active
            </Tab>
            <Tab eventKey="pending" title="Pending">
              Tab content for Pending
            </Tab>
            <Tab eventKey="declined" title="Declined">
              Tab content for Declined
            </Tab>
            <Tab eventKey="Draft" title="Draft">
              Tab content for Draft
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
          </Tabs>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" className="profile__dropdown" id="dropdown-basic">
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
    </>
  );
};

export default OnClickProfile;

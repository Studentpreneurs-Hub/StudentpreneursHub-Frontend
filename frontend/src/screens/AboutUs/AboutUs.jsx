import "../AboutUs/AboutUs.css";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import HeroImg from "../../assets/hero_about_us.png";
import person1 from "../../assets/person_1.jpeg";
import person2 from "../../assets/person_2.jpeg";
import person3 from "../../assets/person_3.jpeg";
import person4 from "../../assets/person_4.jpeg";

const AboutUS = () => {
  return (
    <>
      <Header />
      <section className="hero__section">
        <img src={HeroImg} alt="about us" />
        <h1 className="hero__section__heading">
          Empowering campus entrepreneurs to boost sales
        </h1>
        <p className="hereo__section_paragraphy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia, erat ut ullamcorper feugiat, eros metus blandit metus, vel
          venenatis purus mi ac nisi. Aenean in fermentum augue. Nam posuere,
          libero in fermentum suscipit, libero ligula{" "}
        </p>
      </section>
      <section className="why__section">
        <h1 className="why__section__heading">Why we are building this ?</h1>
        <div className="why__section__reasons">
          <div className="reason__items">
            <span className="reasons__numbering">01.</span>
            <h3 className="reasons__heading">Sign up</h3>
            <p className="reasons__description">
              Register now to unlock a world of opportunities and resources
              tailored for your success on campus.
            </p>
          </div>
          <div className="reason__items">
            <span className="reasons__numbering">02.</span>
            <h3 className="reasons__heading">Create a store</h3>
            <p className="reasons__description">
              Easily set up your personalized store in minutes. Showcase your
              brand and what makes your offerings special.
            </p>
          </div>
          <div className="reason__items">
            <span className="reasons__numbering">03.</span>
            <h3 className="reasons__heading">Upload Products and Flourish</h3>
            <p className="reasons__description">
              Upload your products and let your creativity shine! Reach fellow
              students and staff with your unique offerings
            </p>
          </div>
        </div>
      </section>
      <section className="team__section">
        <h1 className="team__section__heading">The Team</h1>

        <div className="team__members">
          <div className="team__member">
            <img className="team__member__img" src={person1} alt="" />
            <div className="team__member__details">
              <h3 className="team__member__name">Emmanuel</h3>
              <p className="team__member__role">Team Lead</p>
            </div>
          </div>
          <div className="team__member">
            <img className="team__member__img" src={person2} alt="" />
            <div className="team__member__details">
              <h3 className="team__member__name">Nick</h3>
              <p className="team__member__role">UI/UX Designer</p>
            </div>
          </div>
          <div className="team__member">
            <img className="team__member__img" src={person3} alt="" />
            <div className="team__member__details">
              <h3 className="team__member__name">Ronen</h3>
              <p className="team__member__role">Frontend Engineer</p>
            </div>
          </div>
          <div className="team__member">
            <img className="team__member__img" src={person4} alt="" />
            <div className="team__member__details">
              <h3 className="team__member__name">Kingsley</h3>
              <p className="team__member__role">Frontend Engineer</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUS;

import "../AboutUs/AboutUs.css";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import HeroImg from "../../assets/hero_about_us.png";
import Manuel from "../../assets/Manuel.jpeg";
import Nick from "../../assets/nick.jpg";
import Ronen from "../../assets/Nii.jpeg";
import Kingsley from "../../assets/Kingsley.jpeg";

const AboutUS = () => {
  return (
    <>
      <Header />
      <section className="hero__section">
        <img src={HeroImg} alt="about us" />
        <h1 className="hero__section__heading">
          Igniting the Future of Student Entrepreneurship
        </h1>
        <p className="hereo__section_paragraphy">
          We believe in the power of student innovation. Our platform is
          designed to inspire and empower the next generation of entrepreneurs,
          providing a space where ideas come to life and ventures thrive.
        </p>
      </section>
      <section className="why__section">
        <h1 className="why__section__heading">Why we are building this ?</h1>
        <div className="why__section__reasons">
          <div className="reason__items">
            <span className="reasons__numbering">01.</span>
            <h3 className="reasons__heading">Empowering Student Innovators</h3>
            <p className="reasons__description">
              We aim to provide student entrepreneurs with the tools and
              platform they need to transform their ideas into successful
              ventures.
            </p>
          </div>
          <div className="reason__items">
            <span className="reasons__numbering">02.</span>
            <h3 className="reasons__heading">Bridging Visibility Gaps</h3>
            <p className="reasons__description">
              Traditional promotion methods are limited. Our platform ensures
              student-run businesses reach a wider audience within and beyond
              their campus.
            </p>
          </div>
          <div className="reason__items">
            <span className="reasons__numbering">03.</span>
            <h3 className="reasons__heading">
              Supporting Ecosystem
            </h3>
            <p className="reasons__description">
              We’re fostering a community where students can connect,
              collaborate, and access vital resources to grow their businesses.
            </p>
          </div>
        </div>
      </section>
      <section className="team__section">
        <h1 className="team__section__heading">The Team</h1>

        <div className="team__members">
          <div className="team__member">
            <img className="team__member__img" src={Manuel} alt="" />
            <div className="team__member__details">
              <h3 className="team__member__name">Emmanuel</h3>
              <p className="team__member__role">Team Lead</p>
            </div>
          </div>
          <div className="team__member">
            <img className="team__member__img" src={Nick} alt="" />
            <div className="team__member__details">
              <h3 className="team__member__name">Nick</h3>
              <p className="team__member__role">UI/UX Designer</p>
            </div>
          </div>
          <div className="team__member">
            <img className="team__member__img" src={Ronen} alt="" />
            <div className="team__member__details">
              <h3 className="team__member__name">Ronen</h3>
              <p className="team__member__role">Frontend Engineer</p>
            </div>
          </div>
          <div className="team__member">
            <img className="team__member__img" src={Kingsley} alt="" />
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

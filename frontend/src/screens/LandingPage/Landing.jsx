import React from "react";
import "./landing.css";
import { Button, Container, Carousel } from "react-bootstrap";
import arrowRight from "../../assets/arrowRight.png";
import Thousand from "../../assets/thousand.jpeg";
import AccordionCompo from "../../components/Accordion/AccordionCompo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Navbar/Header";
import landingImage_1 from "../../assets/landingImage_1.jpeg";
import landingImage_2 from "../../assets/landingImage_2.jpg";
import landingImage_3 from "../../assets/landingImage_3.jpg";

function Landing() {
  return (
    <>
      <Header />
      <div className="langingImage_container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={landingImage_1} alt="uu" className="landingImage" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={landingImage_2} alt="uu" className="landingImage" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={landingImage_3} alt="uu" className="landingImage" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="sell_Faster_main_div">
        <div className="sell_faster_div">
          <span className="sell_faster_text">Sell faster today</span>
          <br />
          <Button className="start_selling">Start Selling</Button>
        </div>

        <div className="arrow_div">
          <img src={arrowRight} alt="" />
          <p style={{ width: "30rem" }}>
            Join our vibrant hub of student entrepreneurs! Discover unique
            products and innovative services right on campus, from gourmet
            delights to the latest in tech and fashion.
          </p>
        </div>
      </div>
      <div className="campus_creativity_main_div">
        <div className="campus_creativity_heading">
          <section style={{ paddingLeft: "3rem" }}>
            <span>Where Campus Creativity Meets Exceptional Quality</span>
          </section>
          <p className="campus_p_text" style={{ marginLeft: "3rem" }}>
            Delve into a world of entrepreneurial spirit with a diverse range of
            offerings. From mouth-watering cuisines to cutting-edge gadgets and
            trendy fashion, our student entrepreneurs have it all!
          </p>
          <Button className="start_selling" style={{ marginLeft: "3rem" }}>
            Start Selling
          </Button>
          <hr style={{ width: "1030px", marginLeft: "3rem" }} />

          <div className="onboarding_instructions">
            <div className="onboard">
              <span
                className="onboarding_number"
                style={{ marginLeft: "3rem" }}
              >
                01.
              </span>
              <h3 className="onboarding_title" style={{ marginLeft: "3rem" }}>
                Sign up
              </h3>
              <p
                className="onboarding_text"
                style={{ marginLeft: "3rem", width: "70%" }}
              >
                Register now to unlock a world of opportunities and resources
                tailored for your success on campus.
              </p>
            </div>
            <div>
              <span
                className="onboarding_number"
                style={{ marginLeft: "-2rem" }}
              >
                02.
              </span>
              <h3 className="onboarding_title" style={{ marginLeft: "-2rem" }}>
                Create a store
              </h3>
              <p className="onboarding_text" style={{ marginLeft: "-2rem" }}>
                Easily set up your personalized store in minutes. Showcase your
                brand and what makes your offerings special.
              </p>
            </div>
            <div>
              <span
                className="onboarding_number"
                style={{ marginLeft: "-2rem" }}
              >
                03.
              </span>
              <h3 className="onboarding_title" style={{ marginLeft: "-2rem" }}>
                Upload Products and Flourish
              </h3>
              <p className="onboarding_text" style={{ marginLeft: "-2rem" }}>
                Upload your products and let your creativity shine! Reach fellow
                students and staff with your unique offerings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="reach_thousand_main_div">
        <div className="reach_thousand_title_div">
          <p className="reach_thousand_title">
            Reach Thousands of Student Buyers on Campus
          </p>
          <p className="reach_thousand_text">
            Tap into a vast network of student buyers right at the heart of the
            University of Ghana. Connect with an engaged and dynamic community
            eager to explore and support student-run businesses.
          </p>
          <Button className="start_selling">Start Selling</Button>
        </div>
        <div>
          <img src={Thousand} alt="oop" className="reach_thousand_img" />
        </div>
      </div>
      <div className="frequestly_asked_questions">
        <h1 id="frequently_asked_questions_title">
          Frequently Asked Questions
        </h1>
        <Container>
          <AccordionCompo />
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Landing;

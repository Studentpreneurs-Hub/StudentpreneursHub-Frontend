import "../PageNotFound/PageNotFound.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pagenotfound from "../../assets/pagenotfound.png";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";

const PageNotFound = () => {
  return (
    <>
    <Header />
      <section className="notfound">
        <img src={pagenotfound} alt="" />
        <div>
          <h1>Oh No! Error 404</h1>
          <p>
            This page doesn’t exist or was removed! We suggest you back to home
          </p>
          <Link to="/">
            <Button className="signup__btn">Back to Homepage</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PageNotFound;

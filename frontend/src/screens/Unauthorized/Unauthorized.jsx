import "../PageNotFound/PageNotFound.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lock from "../../assets/lock-password.svg";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <section className="notfound">
        <img src={lock} alt="" />
        <div>
          <h1>401 error - Unauthorized</h1>
          <p>You do not have permission to view this page.</p>
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

import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div>
      <footer> 
        <div className="footer_sub_div">
          <div className="footer_logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="footer_icons">
            <Link to="#">
              <FaTwitter color="#ffffff" size={20} />
            </Link>
            <Link to="#">
              <FaFacebookF color="#ffffff" size={20} />
            </Link>
            <Link to="#">
              <FaInstagram color="#ffffff" size={20} />
            </Link>
            <Link to="#">
              <FaLinkedin color="#ffffff" size={20} />
            </Link>
          </div>

          <div className="footer_services">
            <Link className="footer_links" to="#">
              FAQs
            </Link>
            <Link className="footer_links" to="#">
              Terms of Service
            </Link>
            <Link className="footer_links" to="#">
              Privacy Policy
            </Link>
          </div>

          <hr style={{ width: "1040px", color: "#ffffff" }} />

          <div>
            <span className="footer_desc">
              Student Entrepreneurship HUB, a vibrant platform
              where students can showcase and sell their innovative products and
              services. Our mission is to empower young entrepreneurs by
              providing them with the resources and community they need to
              succeed. Connect, collaborate, and grow your business with us
              today!
            </span>
          </div>

          <div className="footer_copyright">
            &copy; {new Date().getFullYear()} Student Entrepreneurship HUB. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

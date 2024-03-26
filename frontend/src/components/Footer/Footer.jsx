import React from "react";
import "./footer.css";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_sub_div">
          <div className="logo">
            <BiSolidShoppingBags color="#00A6A6" className="logo-icon" />
            <span className="logo-text">Studentpreneurs HUB.</span>
          </div>

          <div className="footer_icons">
            <FaTwitter color="#ffffff" size={20} />
            <FaFacebookF color="#ffffff" size={20} />
            <FaInstagram color="#ffffff" size={20} />
            <FaLinkedin color="#ffffff" size={20} />
          </div>

          <div className="footer_services">
            <span id="footer_FAQ">FAQs</span>
            <span id="footer_TOS">Terms of Service</span>
            <span id="footer_PP">Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

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
          <div className="footer_logo">
            <BiSolidShoppingBags color="#00A6A6" className="footer_logo-icon" />
            <span className="footer_logo-text">Studentpreneurs HUB.</span>
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

          <hr style={{ width: "1040px", color: "#ffffff" }} />

          <div>
            <span className="footer_desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod libero id ante malesuada, ac efficitur lorem mollis.
              Phasellus vitae erat ut turpis posuere finibus ac nec sapien. Duis
              sed sapien nec ipsum feugiat lacinia. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam euismod libero id ante
              malesuada, ac efficitur lorem mollis. Phasellus vitae erat ut
              turpis posuere finibus ac nec sapien. Duis sed sapien nec ipsum
            </span>
          </div>

          <div className="footer_copyright">
            &copy; {new Date().getFullYear()} Student Entrpreneurship HUB. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

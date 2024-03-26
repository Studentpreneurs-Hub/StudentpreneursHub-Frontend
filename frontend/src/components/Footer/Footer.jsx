import React from "react";
import "./footer.css";
import { BiSolidShoppingBags } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <footer>
        <div className="logo">
          <BiSolidShoppingBags color="#00A6A6" className="logo-icon" />
          <span className="logo-text">Studentpreneurs HUB.</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

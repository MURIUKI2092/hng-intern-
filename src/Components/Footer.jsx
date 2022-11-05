import React from "react";
import zuri from "../images/Vector.png";
import i4g from "../images/I4G.png";

const Footer = () => {
  return (
    <footer className="App footer__section">
      <img src={zuri} alt="zuri internship" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="ingressive for good" />
    </footer>
  );
};

export default Footer;
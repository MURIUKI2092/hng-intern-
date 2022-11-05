import React from "react";
import ingressive  from "../images/ingressive.jpg";


const Footer = () => {
  return (
    <footer className="App footer__section">
     <p>HNG Internship 9 Frontend Task</p>
     <img src={ingressive} alt="ingressive for good" />
    </footer>
  );
};

export default Footer;
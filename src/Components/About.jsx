import React from "react";
import Footer from "./Footer";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-el">
        <img
          className="about-img"
          src="https://img.favpng.com/12/22/17/africa-icon-png-favpng-yiCtHFVzkydMGdvFC8keqTcV8.jpg"
          alt="africa-image-png-"
        />
        <h1 aria-label="Hi! I'm a developer" className="about-heading">
          Hi!&nbsp;<span id="writers"></span>
        </h1>
        
        {/* <h1 className="about-heading">About Us</h1> */}
        <p className="about-paragraph">
          Sanaa is an e-commerce platform designed to host classic art pieces.
          It seeks to bridge the gap between local and international artists and
          their customers. It provides a platform for them to interact and buy
          and sell their art pieces without the need for a middle-man, thus
          promoting the artists and providing a safe platform for transaction
          between the artists and the buyers.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;

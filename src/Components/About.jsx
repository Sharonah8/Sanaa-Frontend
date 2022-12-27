import React from "react";
import Footer from './Footer';
import "../Styles/About.css";

function About() {
  return (
  <div className="about-page">
    <div className="about-el">
      <img className="about-img"
        src="https://i.pinimg.com/736x/3f/bc/5b/3fbc5bbb906330d0985f006854f48236.jpg"
        alt="africanimage"
      />
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">
        Sanaa is an e-commerce platform designed to host classic art peices. It
        seeks to bridge the gap between local and international artists and
        their customers. It provides a platform for them to interact and buy and
        sell their art pieces without the need for a middle-man, thus promoting
        the artists and providing a safe platform for transaction between the
        artists and the buyers.
      </p>
    </div>
    <Footer />
    </div>
  );
}

export default About;

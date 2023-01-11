import React from "react";
import Footer from './Footer';
import "../Styles/About.css";

function About() {
  return (
  <div className="about-page">
    <div className="about-el">
      <img
        className="about-img"
        src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/33f9c70f33b75988975bd301/pexels-photo-2250276.jpeg?version="
        alt="monalisa"
      />
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">
        Sanaa is an e-commerce platform designed to host classic art pieces. It
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

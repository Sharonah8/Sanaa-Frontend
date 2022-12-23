import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-el">
      <img
        className="about-img"
        src="https://i.pinimg.com/originals/30/e7/0a/30e70a15bdff08c1f4b6b4d6e8871c7d.png"
        alt="monalisa"
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
  );
}

export default About;

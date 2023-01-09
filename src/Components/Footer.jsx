import React from "react";
import { SocialIcon } from "react-social-icons";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-el">
      <h2 className="footer-heading">The journey is the reward</h2>
      <p className="footer-paragraph">
        Live Intentionally . Live Authentically
      </p>
      <SocialIcon
        url="https://twitter.com/jaketrent"
        style={{ margin: 10  }}
      />
      <SocialIcon
        url="https://linkedin.com/in/jaketrent"
        style={{ margin: 10 }}
      />
      <SocialIcon
        url="https://facebook.com/in/jaketrent"
        style={{ margin: 10 }}
      />
      <SocialIcon
        url="https://instagram.com/in/jaketrent"
        style={{ margin: 10 }}
      />
      
    </footer>
  );
}

export default Footer;

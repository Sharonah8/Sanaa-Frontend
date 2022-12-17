import React from "react";
import { SocialIcon } from "react-social-icons";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <h2>The journey is the reward</h2>
      <p>Live Intentionally . Live Authentically</p>
      <SocialIcon url="https://twitter.com/jaketrent" style={{ margin: 10 }} />
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

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
        url="https://twitter.com/Sharonah_Ken?t=mVJTfg0Keo1YTiDmfyi7Fw&s=09"
        style={{ margin: 10  }}
      />
      <SocialIcon
        url="https://www.linkedin.com/in/ian~kibui"
        style={{ margin: 10 }}
      />
      <SocialIcon
        url="https://www.facebook.com/ricky.murithi/"
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

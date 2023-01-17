import React from "react";
import "../Styles/HomePage.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { Feedback } from "@mui/icons-material";
import FeedbackDisplay from "./FeedbackDisplay";
import SectionMid from "./SectionMid";

function HomePage() {
  return (
    <main>
      <div className="home-page">
        <div className="home-page-container">
          <div className="centered-text">
            {/* <h2 className="home-page-heading">
              Sanaa <br></br> Art
            </h2> */}
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
              rel="stylesheet"
            ></link>

            {/* <h1 aria-label="Hi! I'm a developer">
  Hi! I'm a&nbsp;<span class="typewriter"></span>
</h1>

<h1 aria-label="Hi! I'm a developer">
  Hi! I'm a&nbsp;<span class="typewriter thick"></span>
</h1> */}

            <h1 aria-label="Hi! I'm a developer" id="move-up">
              Welcome To Sanaa We Offer,
            </h1>
            <h1 aria-label="Hi! I'm a developer" id="move-down">
              &nbsp;
              <span class="typewriter nocaret"></span>
            </h1>
            <p className="home-page-paragraph" id="pofppp">
              To understand a work of art, you must develop the ability to
              perceive. To perceive is to become deeply aware through the senses
              of the special nature of art.
            </p>
            <Link to={"/Gallery"}>
              <button id="home-page-btn">Go to store</button>
            </Link>
          </div>
          <div classname="overlay">
            <img
              className="home-page-img"
              src="https://cdn.firespring.com/images/ab9815f3-cc32-429c-bbf3-fdfd6fd617cf.png"
              alt="africanimage"
            />
          </div>
        </div>
      </div>
      <SectionMid />
      <FeedbackDisplay />
      <Footer />
    </main>
  );
}

export default HomePage;

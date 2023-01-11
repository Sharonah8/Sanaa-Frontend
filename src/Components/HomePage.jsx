import React from "react";
import "../Styles/HomePage.css";
import FeedbackDisplay from "./FeedbackDisplay";
import Footer from './Footer';

import { Link } from "react-router-dom";


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
              src="https://i.pinimg.com/564x/e7/18/77/e71877a5239419faec726e26e9e0696b.jpg"
              alt="africanimage"
            />
          </div>
        </div>        
      </div>
      <FeedbackDisplay />
      <Footer />
    </main>
  );
}

export default HomePage;

import React from "react";
import "../Styles/HomePage.css";
import Footer from './Footer';

function HomePage() {
  return (
    <main>
      <div className="home-page">
        <div className="home-page-container">
          <div className="centered-text">
            <h2 className="home-page-heading">
              Sanaa <br></br> Art
            </h2>
            <p className="home-page-paragraph">
              To understand a work of art, you must develop the ability to perceive. To perceive is to become deeply aware through the senses of the special nature of art.
            </p>
            <button id="home-page-btn">Go to store</button>
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
      <Footer />

    </main>
  );
}

export default HomePage;

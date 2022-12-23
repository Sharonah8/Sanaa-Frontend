import React from "react";
import "../Styles/HomePage.css";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
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
    </main>
  );
}

export default HomePage;

import React from 'react';
import "../Styles/HomePage.css";
import NavBar from './NavBar';
import SecondImage from "../Images/round-tree.jpg";
import Footer from "./Footer"

function HomePage() {
  return (
    <main>
      <NavBar />
      <div className='home-page'>
        <div className='home-page-container'>
          <div className='centered-text'>
            <h2>Sanaa <br></br> Art</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button id="home-page-btn">Go to store</button>
          </div>
          <div classname='overlay'>
            <img className='home-page-img' src="https://i.ibb.co/1nwd6B3/909b68afdf7ca5550fa298dc06657ab0.jpg"  alt="image" />
            {/* <p>round image</p> */}
          </div>
        </div>
      </div>
      <div classname="footer-section">
        <Footer />
      </div>
    </main>
  )
}

export default HomePage

import React from 'react'
//import navbar.css from styles
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <h1 class="navbar-brand text-light" href="#">Sanaa</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarText">
      <div className="d-flex">
      
      </div>
      <div className="d-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link class="nav-link text-light" to="/">HomePage</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/About">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/Gallery">Gallery</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/AddGallery">AddGallery</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/GalleryListing">GalleryListing</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/UpdateGallery">UpdateGallery</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/Cart">Cart</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/LogIn"><button id='nav-btn-login'>LogIn</button></Link>
          {/* <Link class="nav-link text-light" to="/LogIn">LogIn</Link> */}
          </li>
          <li class="nav-item">
          <Link class="nav-link text-light" to="/SignUp"><button id='nav-btn-login'>SignUp</button></Link>
          
          {/* <Link class="nav-link text-light" to="/SignUp">SignUp</Link> */}
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
  
}




export default NavBar
import React, { useState } from 'react'
//import navbar.css from styles
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'
import styled from 'styled-components';



//   const Main = styled("div")`
//   font-family: sans-serif;
//   background: #f0f0f0;
//   height: 100vh;
// `;

  const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
  position: relative;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  // padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 1.1rem;
  color: white;
  // background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  position: absolute;
  cursor: pointer;
  padding-left: 1em;
  background:;
  // border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);


  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <img src={logo} id ='img-mini'/>
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
          {/* <li class="nav-item">
          <Link class="nav-link text-light" to="/Feedback">Review</Link>
          </li> */}
          {/* <li class="nav-item">
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
          </li> */}

          {/* <Main> */}
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/Gallery">Gallery</Link>
              </li>
            </DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem><li class="nav-item">
                <Link class="nav-link text-light" to="/AddGallery">AddGallery</Link>
                </li></ListItem>
                <ListItem><li class="nav-item">
                <Link class="nav-link text-light" to="/GalleryListing">GalleryListing</Link>
                </li></ListItem>
                {/* <ListItem><li class="nav-item">
                <Link class="nav-link text-light" to="/UpdateGallery">UpdateGallery</Link>
                </li></ListItem> */}
              </DropDownList>
            </DropDownListContainer>
              )}
          </DropDownContainer>
          {/* </Main> */}
          
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
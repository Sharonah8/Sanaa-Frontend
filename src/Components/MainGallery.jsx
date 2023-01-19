import React, { useState, useEffect } from "react";
import Search from "./Search";
import GalleryList from "./GalleryList"
// import Cart from "./Cart";
import LogIn from "./LogIn";



function MainGallery({login}) {
  const [images, setImages] = useState();
  const [searchValue, setSearchValue] = useState([]);
  const isLoggedIn = login
  useEffect(() => {
    fetch("http://127.0.0.1:3000/art_pieces",{headers: {'Authorization': `${localStorage.getItem("token")}`} } )
      .then((res) => res.json())
      .then((resp) => {
        setImages(resp);
        setSearchValue(resp);
      });
  }, []);
  
  function change(event) {
    setImages(
      searchValue.filter((images) =>
        images.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  // return (
    // {
      isLoggedIn ? (
        <div className = "main-gallery" >
      <Search change={change} />
      <GalleryList images = {images}/>
       
    </div>
      ): 
      (<LogIn />)
    // }
    
  // );
}

export default MainGallery;
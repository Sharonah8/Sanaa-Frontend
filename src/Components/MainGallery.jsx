import React, { useState, useEffect } from "react";
import Search from "./Search";
import GalleryList from "./GalleryList"
// import Cart from "./Cart";




function MainGallery() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/art_pieces", )
      .then((res) => res.json())
      .then((resp) => {
        setImages(resp);
        setSearchValue(resp);
      });
  }, []);
  // {headers: {'Authorization': `${localStorage.getItem("token")}`} }
  function change(event) {
    setImages(
      searchValue.filter((images) =>
        images.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  return (
    <div className="main-gallery">
      <Search change={change} />
      <GalleryList images = {images}/>
       
    </div>
  );
}

export default MainGallery;
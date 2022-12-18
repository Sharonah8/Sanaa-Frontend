import React, { useState, useEffect } from "react";
import AddGallery from "./AddGallery";
import GalleryList from "./GalleryList"


function MainGallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((res) => res.json())
      .then((resp) => {
        setImages(resp);
       
      });
  }, []);

  return (
    
    <div className="main-gallery">
      <GalleryList images = {images}/>
      <AddGallery  />
    </div>
  )
}

export default MainGallery
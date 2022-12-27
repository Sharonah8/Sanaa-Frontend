import React, { useState, useEffect } from "react";
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
    </div>
  )
}

export default MainGallery
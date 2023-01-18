import React, { useState, useEffect } from "react";
import Search from "./Search";
import GalleryList from "./GalleryList";



function MainGallery() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/images")
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

  return (
    <div className="main-gallery">
      <Search change={change} />
      <GalleryList images={images} />    
    </div>
  );
}

export default MainGallery;
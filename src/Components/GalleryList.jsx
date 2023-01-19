import React from "react";
import Gallery from "./Gallery";
function GalleryList({ images }) {
  
  return (
    <div>
      {images&&images.map((img) => {
        return <Gallery key={img} img={img} />;
        
        
      })}
    </div>
  );
}

export default GalleryList;
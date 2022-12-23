import React, { useEffect, useState } from 'react'
import '../Styles/AddGallery.css'
import { Link } from 'react-router-dom';

function AddGallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/images")
    fetch("")
    .then((res) => res.json())
    .then((data => setData(data)));
  }, [])

  return (
    <div className='addGallery'>
      <h3>December Collection</h3>
      <div className='container'>
        {data.map((gallery) => {
          
          return (
          <Link to={`/gallery/${gallery.id}`}>
            <div className='card' key={gallery.id}>
              <img src={gallery.image} />
              <h2>{gallery.title}</h2>
              <h3>{gallery.price}</h3>
              <p>{gallery.description}</p>
              <Link to={`/gallery/${gallery.id}`}>BUY NOW</Link>
            </div>
          </Link>
          )
        })}

      </div>
    </div>
  )
}

export default AddGallery
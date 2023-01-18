import React, { useState } from "react";
import "../Styles/AddGallery.css";
import Footer from "./Footer";

function AddGallery() {
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');



  function handleSubmit (e) {
  e.preventDefault();
  const site = {file,title,description,price}
   
    
    
    fetch("http://localhost:3000/images",{
      method: 'POST',
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(site)
    })
    .then((res) => res.json())
    .then(()=>{
      setFile('')   
      setTitle('')
      setDescription('')
      setPrice('')
    })
  
  
  }

  return (
    <div className="add-gallery-container">
      <div className="col-sm-6 offset-sm-5">
        <br /> <br />
     <form autocomplete="off" className='formdf' onSubmit={handleSubmit}>

        <h1 id="add-cart-head">Add Art</h1>
        <input
          type="file"
          required="required"
          value={file}
          className="add-gallery"
          onChange={(e) => setFile(e.target.value)}
          placeholder="file"
        />
        <br /> <br /> <br /> <br />
        <input
          type="text"
          required="required"
          value={title}
          className="add-gallery"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <br /> <br /> <br /> <br />
        <input
          type="text"
          required="required"
          value={description}
          className="add-gallery"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <br /> <br /> <br /> <br />
        <input
          type="text"
          className="add-gallery"
          required="required"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <br /> <br /> <br /> <br />
        <button className="add-btn" >
          {" "}
          Upload{" "}
        </button>
        </form>

      </div>
      <br />

      {/* <div clasName="pik">
        <img src={require('../Images/black-bg.png')} alt="" />
      </div> */}

      <Footer />
    </div>

    // import React, { useEffect, useState } from 'react'
    // import '../Styles/AddGallery.css'
    // import { Link } from 'react-router-dom';

    // function AddGallery() {
    //   const [data, setData] = useState([]);

    //   useEffect(() => {

    //     // const requestOptions = {
    //     //   method: 'POST',
    //     //   headers: { 'Content-Type': 'application/json' },
    //     //   body: JSON.stringify({ title: 'React POST Request Example' })
    //     // };

    //     fetch("http://localhost:3000/images")
    //     // fetch("http://localhost:3003/images", requestOptions)
    //     .then((res) => res.json())
    //     .then((data => setData(data)));
    //   }, [])

    //   return (
    //     <div className='addGallery'>
    //       <h3>December Collection</h3>
    //       <div className='container'>
    //         {data.map((img) => {

    //           return (
    //           <Link to={`/addgallery/${img.id}`}>
    //             <div className='card' key={img.id}>
    //               <img src={img.image} />
    //               <h2>{img.title}</h2>
    //               <p>{img.description}</p>
    //               <h3>{img.price}</h3>
    //               <Link to={`/addgallery/${img.id}`}>BUY NOW</Link>
    //             </div>
    //           </Link>
    //           )
    //         })}

    //       </div>
    //     </div>
  );
}

export default AddGallery;

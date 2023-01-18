import React, { useState, useEffect } from 'react'
import '../Styles/UpdateGallery.css'
// import {withRouter} from 'react-router-dom'

function UpdateGallery(props) {
    console.warn("props", props.match.params.id)
    const [img, setData] = useState([])
    useEffect(async ()=>{
        let result = await fetch("http://localhost:8000/images"+props.match.params.id);
        result = await result.json();
        setData(result)
    },[])
    
    
  return (
    <div className='update'>
        <div className='update-gallery'>
            <h1>Update Product</h1>
            <input type="file" defaultValue={img.file} /> <br /> <br />
            <input type="text" defaultValue={img.title} /> <br /> <br />
            <input type="text" defaultValue={img.description} /> <br /> <br />
            <input type="text" defaultValue={img.price} /> <br /> <br />
            <img style={{width:50}} src={"http://localhost:8000/images/"+img.file} />
            <br /> <br />
            <button id = 'update-btn'>
               update
            </button>
        </div>
        
        
    </div>
  )
}

export default (UpdateGallery);
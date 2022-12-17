import React, {useState} from 'react'
import '../Styles/Gallery.css'

function Gallery({img}) {


    const [style, setStyle] = useState("popup-view");
    
    const changeStyle = () => {
      console.log("display content");
    
      setStyle("popup-view2");
    };




  return (
     
       <div className='container'>
         {/* <a><i className='fas fa-times close-btn'></i></a> */}

         <div className='product'>
           <div className='product-card'>
             <h2 className='name'>{img.title}</h2>
               <span className='price'>{img.price}</span>
                <button className='popup-btn' onClick={changeStyle}>Quick View</button>
                 <img src={img.image} className="product-img" alt='product-img' width={299} height={320}></img>
            </div>
            {/* inaishia hapa */}


            <div className={style}>
              <div className='popup-card'>
                
                {/* <a><i className='fas fa-times close-btn'></i></a> */}
                <div className='product-img'>
                  <img src={img.image} alt=''width={400} height={500} ></img>
                </div>
                <div className='info'>
                  <h2>{img.title}<br/><span>Potrait</span></h2>
                  <p>{img.description}</p>
                  <span className="price">{img.price}</span>
                  <a href="#" className='add-cart-btn'>Add to Cart</a>
                  <a href="#" className='add-wish'>Add to Wishlist</a>
                </div>
              </div>
            </div>   
         </div>
       </div>  

         
  )
}

export default Gallery

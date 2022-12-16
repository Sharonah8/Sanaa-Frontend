import React from 'react'
import '../Styles/Gallery.css'

function Gallery({img}) {

  return (
   
       <div className='container'>
         <div className='product'>
           <div className='product-card'>
             <h2 className='name'>{img.title}</h2>
               <span className='price'>{img.price}</span>
                <button className='popup-btn'>Quick View</button>
                 <img src={img.image} className="product-img" alt='product-img' width={299} height={320}></img>
            </div>
            <div className='popup-view'>
              <div className='popup-card'>
                <a><i className='fas fa-times close-btn'></i></a>
                <div className='product-img'>
                  <img src={img.image} alt=''></img>
                </div>
                <div className = "info">
                  <h2>{img.title}<br/><span>Potrait</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
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
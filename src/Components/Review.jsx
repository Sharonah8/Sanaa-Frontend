import React, {useState} from 'react'
import '../Styles/Review.css'
import {FaStar} from 'react-icons/fa'

function Review() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  return (
    <div className='review-stars'>
      {[...Array(5)].map((star, iterate) => {
        const ratingValue = iterate+1;
        return (
          
          <label>
          <input type='radio' 
           name='rating' 
           value={ratingValue}
           onClick={()=>setRating(ratingValue)}
           />
            <FaStar 
             className='star' 
             color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
             size={35}
             onMouseEnter={()=> setHover(ratingValue)}
             onMouseLeave={()=> setHover(null)}
             />
          </label>
        ); 
      })}
        <p id='rating-p'>You rating of {rating} has been well received. </p>
    </div>
  );
};

export default Review
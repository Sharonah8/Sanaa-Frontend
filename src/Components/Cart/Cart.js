import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from "../../redux/action";
import { AiOutlineMinus } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = ({gallery}) => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
  
    const handleAdd = (item) => {
      dispatch(addCart(item));
    };
    const handleDel = (item) => {
      dispatch(delCart(item));
    };

    const emptyCart = () => {
        return (
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
        );
      };

    const cartItems = (gallery) => {
        return (
            <>
                <div className='cart'>
                    <img className='cart_image' src={gallery.image} alt={gallery.title} />
                    <div className='description'>
                        <h3>{gallery.title}</h3>
                        <p>
                            {gallery.qty} X Ksh. {gallery.price} = <span className='total'>Ksh. {gallery.qty * gallery.price}</span>
                        </p>
                        <button style={{color: 'red'}} className='action' onClick={() => handleDel(gallery)}><AiOutlineMinus /></button>
                        <button style={{color: 'green'}} className='actions' onClick={() => handleAdd(gallery)}><GrFormAdd /></button>
                    </div>
                </div>
            </>
        )
    }

    const buttons = () => {
        return (
            <>
                <div className='btn'>
                    <Link to='/payment'>
                        <h3>Proceed to Payment</h3>
                    </Link>
                </div>
            </>
        )
    }


  return (
    <div className='main_cart'>
        <div className='space'></div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && buttons()}
    </div>
  )
}

export default Cart;
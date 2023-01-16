import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { AiOutlineMinus } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import "../Styles/cart.css";
import { Link } from "react-router-dom";

const Cart = ({ gallery }) => {
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
        <h3 id="cart-text">Your Cart is Empty</h3>
      </div>
    );
  };

  const cartItems = (img) => {
    return (
      <>
        <div className="cart">
          <img className="cart_image" src={img.image} alt={img.title} />
          <div className="description">
            <h3>{img.title}</h3>
            <p>
              {img.qty} X Ksh. {img.price} ={" "}
              <span className="total">Ksh. {img.qty * img.price}</span>
            </p>
            <button
              style={{ color: "red" }}
              className="action"
              onClick={() => handleDel(img)}
            >
              <AiOutlineMinus />
            </button>
            <button
              style={{ color: "green" }}
              className="actions"
              onClick={() => handleAdd(img)}
            >
              <GrFormAdd />
            </button>
          </div>
        </div>
      </>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="btn">
          <Link to="/payment">
            <h3>Proceed to Payment</h3>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="main_cart">
      <div className="space"></div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;

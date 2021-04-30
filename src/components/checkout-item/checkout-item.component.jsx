import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  reduceItemFromCart,
  addItem,
} from "./../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  cartItem: { name, imageUrl, price, quantity },
  clearItemFromCart,
  reduceItemFromCart,
  addItem,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            quantity === 1
              ? clearItemFromCart(cartItem)
              : reduceItemFromCart(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  reduceItemFromCart: (item) => dispatch(reduceItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

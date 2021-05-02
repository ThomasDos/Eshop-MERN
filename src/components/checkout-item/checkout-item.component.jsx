import React from "react";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  reduceItemFromCart,
  addItem,
} from "./../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  InfoContainer,
  QuantityContainer,
  ArrowContainer,
  ValueContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({
  cartItem,
  cartItem: { name, imageUrl, price, quantity },
  clearItemFromCart,
  reduceItemFromCart,
  addItem,
}) => {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <InfoContainer>{name}</InfoContainer>
      <QuantityContainer>
        <ArrowContainer
          onClick={() => {
            quantity === 1
              ? clearItemFromCart(cartItem)
              : reduceItemFromCart(cartItem);
          }}
        >
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <InfoContainer>{price}</InfoContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  reduceItemFromCart: (item) => dispatch(reduceItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

import React from "react";

import {
  CartItemContainer,
  ImageItemContainer,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageItemContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>
        {quantity} x ${price}
      </PriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;

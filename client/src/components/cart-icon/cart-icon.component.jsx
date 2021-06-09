import { React } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import { selectCartItemsCount } from "./../../redux/cart/cart.selectors";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = ({ dispatch, itemCount }) => {
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);

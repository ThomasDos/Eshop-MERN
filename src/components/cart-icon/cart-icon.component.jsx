import { React } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "./../../redux/cart/cart.selectors";

const CartIcon = ({ dispatch, itemCount }) => {
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);

import React from 'react';
import './cart-drop-down.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton> GO TO CHECK OUT</CustomButton>
  </div>
);
export default CartDropDown;

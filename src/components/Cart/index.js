import React from "react";
import { BsCart3 } from "react-icons/bs";
import "./styles.scss";
const Cart = ({number=15}) => {
  return (
    <div className="cart">
      <BsCart3 />
      <span className="number">{number}</span>
    </div>
  );
};

export default Cart;

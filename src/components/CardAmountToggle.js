import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus id="decrease-button" />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus id="increase-button" />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
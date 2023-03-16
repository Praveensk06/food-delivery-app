import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { actionType } from "./reducer";
import { useStateValue } from "./styles/StateProvider";

// initialize an empty array for the cart items
let cartItems = [];

const CartItems = ({ imgSrc, name, price, itemId }) => {
  // Declare a state variable named qty and set its initial value to 1
  const [qty, setQty] = useState(1);

  // Get the cart state and dispatch function from the StateProvider using the useStateValue hook
  const [{ cart }, dispatch] = useStateValue();

  // product od qty * price
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  // a side effect whenever qty changes update cart items
  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  // updateQuantity that takes an action (add/remove) and an item ID as arguments
  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty === 1) cartItems.pop(id);
      dispatch({
        type: actionType.SET_CART,
        cart: cartItems,
      });
      setQty(qty - 1);
    }
  };
  return (
    <div className="cart-item">
      <div className="img-box">
        <img src={imgSrc} alt="" />
      </div>
      <div className="item-section">
        <h2 className="item-name">{name}</h2>
        <div className="item-quantity">
          <span>x{qty}</span>
          <div className="quantity">
            <AiOutlineMinus
              className="item-remove"
              onClick={() => updateQuantity("remove", itemId)}
            />

            <AiOutlinePlus
              className="item-add"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="item-price">
        <span className="dolar-sign">$</span>
        <span className="item-price-value">{itemPrice}</span>
      </p>
    </div>
  );
};

export default CartItems;

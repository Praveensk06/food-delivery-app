import React, { useEffect, useState } from "react";

import "./styles/itemcard.css";

import { AiFillStar, AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import { Items } from "./data";
import { StateContext, useStateValue } from "./styles/StateProvider";

import { actionType } from "./reducer";

let cartData = [];

const ItemCard = ({ itemId, imgSrc, price, name, ratings }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [curValue, setCurValue] = useState(Math.floor(ratings));

  const [cart, setCart] = useState(null);
  const [{}, dispatch] = useStateValue(StateContext);

  useEffect(() => {
    if (cart) {
      cartData.push(cart);

      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [cart]);

  const handleClick = (value) => {
    setCurValue(value);
  };
  return (
    <div className="item-card" id={itemId}>
      <div
        className={`is-favorite ${isFavorite ? "active" : ""}`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <AiFillHeart className="heart-icon" />
      </div>
      <div className="img-box">
        <img src={imgSrc} alt="" className="item-img " />
      </div>
      <div className="item-content">
        <h3 className="item-name">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${curValue > i ? "orange" : "grey"}`}
                onClick={() => handleClick(i + 1)}
              >
                <AiFillStar className="star-icon" />
              </i>
            ))}
            <h3 className="price">
              <span>$</span>
              {price}
            </h3>
          </div>
          <i
            className="add-to-cart"
            onClick={() => setCart(Items.find((i) => i.id === itemId))}
          >
            <AiOutlinePlus className="plus-icon" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

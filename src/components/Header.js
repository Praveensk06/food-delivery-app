import React, { useEffect, useState } from "react";
import "./styles/header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import logo from "../assets/food-logo.png";
import User from "../assets/user.jpeg";

// functional component called header,it renders the top header of the webpage
const Header = () => {
  useEffect(() => {
    const toggleMenu = document.querySelector(".toggle-menu");

    const rightMenu = document.querySelector(".right-menu");

    toggleMenu.addEventListener("click", () => {
      document.querySelector(".right-menu").classList.add("activated");
      setTimeout(() => {
        rightMenu.classList.remove("activated");
      }, 5000);
    });
  });

  return (
    <header>
      <img src={logo} alt="logo" className="logo" />

      {/* search input */}
      <div className="  welcome-box">
        <p className="welcome-message">
          "Hungry? Let us take care of that! Welcome to Delicious Bites"
        </p>
      </div>
      <div className="shopping-cart">
        <AiOutlineShoppingCart className="cart-icon" />
        <div className="cart-content">
          <p id="cart-qty">2</p>
        </div>
      </div>

      <div className="profile-container">
        <div className="img-box">
          <img src={User} alt="user" className="user-img" />
        </div>
        <h2 className="user-name">Praveen</h2>
      </div>
      <div className="toggle-menu">
        <BsFillCartCheckFill className="toggle-icon" />
      </div>
    </header>
  );
};

export default Header;

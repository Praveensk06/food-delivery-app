import React from "react";
import { IoIosArrowForward } from "react-icons/io";

// This component renders menu categories of the web page
const MenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <div className={`row-menu-card ${isActive} ? "active" : ""  `}>
      <div className="img-box">
        <img src={imgSrc} alt={"product"} />
      </div>
      <h3>{name}</h3>
      <i className="load-menu">{<IoIosArrowForward className="load-icon" />}</i>
    </div>
  );
};

export default MenuCard;

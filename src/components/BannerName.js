import React from "react";
import "./styles/banner.css";

// Banner component it renders the banner of the web page
const BannerName = ({ name, discount, link }) => {
  return (
    <div className="banner-content">
      <h3>Hello {name}</h3>
      <p>
        Get free discount for every <span>${discount}</span> Purchase
      </p>
      <a href={link}>Learn more</a>
    </div>
  );
};

export default BannerName;

import React from "react";

import { IoIosArrowForward } from "react-icons/io";

const SubMenuContainer = ({ name }) => {
  return (
    <div className="sub-menu-container">
      <h3>{name}</h3>
      <div className="view-all">
        <p>View All</p>
        <i>{<IoIosArrowForward className="arrow" />}</i>
      </div>
    </div>
  );
};

export default SubMenuContainer;

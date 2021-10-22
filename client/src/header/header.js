import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-component">
      <div className="header-title">
        <span>Get Up and Hike</span>
      </div>
      <img
        className="header-image"
        src="../images/free-hiking-trails-in-Joburg.jpeg"
        alt="hikers"
      />
    </div>
  );
}

export default Header;

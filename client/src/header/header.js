import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-component">
      <div className="header-title">
        <span className="title">Get Up and Hike</span>
      </div>
      <img
        className="header-image"
        src="/images/hiking-header.jpeg"
        alt="hikers"
      />
    </div>
  );
}

export default Header;

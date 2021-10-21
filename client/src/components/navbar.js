import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left"></div>
      <div className="center">
        <div className="nav-links">Home</div>
        <div className="nav-links">About</div>
        <div className="nav-links">Post</div>
        <div className="nav-links">Write</div>
      </div>
      <div className="right">
        {/* <img src="" alt=""> */}
        <input className="search" />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default NavBar;

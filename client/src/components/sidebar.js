import React from "react";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="sidebar-items">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          className="sidebar-image"
          src="/images/free-hiking-trails-in-Joburg.jpeg"
          alt="profile-pic"
        />
        <p className="sidebar-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="sidebar-items">
          <span className="sidebar-title">CATEGORIES</span>
          <ul className="list">
            <li className="list-items">Trails</li>
            <li className="list-items">Tips and Tricks</li>
            <li className="list-items">Favorites</li>
            <li className="list-items">Pictures</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

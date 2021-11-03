import React from "react";
import "./sidebar.css";

function SideBar() {
  const user = localStorage.getItem("user");

  return (
    <div className="side-bar">
      <div className="sidebar-items">
        <span className="sidebar-title">ABOUT GET UP AND HIKE</span>
        <img
          className="sidebar-image"
          src="/images/free-hiking-trails-in-Joburg.jpeg"
          alt="profile-pic"
        />
        <p className="sidebar-info">
          This is a community blog designed for hikers and outdoor lovers to
          come together. A place where you can post about your hiking
          adventures, things you have learned, or wish you knew before going out
          in the mountains.
        </p>
        {/* <div className="sidebar-items">
          <span className="sidebar-title">CATEGORIES</span>
          <ul className="list">
            <li className="list-items">Trails</li>
            <li className="list-items">Tips and Tricks</li>
            <li className="list-items">Favorites</li>
            <li className="list-items">Pictures</li>
          </ul> */}
        {/* </div> */}
        {/* <span>{user ? <h4>Is Logged in</h4> : <h4>Is Logged out</h4>}</span> */}
      </div>
    </div>
  );
}

export default SideBar;

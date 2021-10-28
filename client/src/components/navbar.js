import React from "react";
import "./navbar.css";
// import {BrowserRouter as Router, Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left"></div>
      <div className="center">
        <div className="nav-links">Home</div>
        <div className="nav-links">About</div>
        <div className="nav-links">Create Post</div>

        {/* <Router>
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-links">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-links">
            <Link to="/create">Create Post</Link>
          </div>
        </Router> */}
      </div>
      <div className="right">
        {/* <img className="profile-pic" src="" alt=""> */}
        <input className="search" />
        <i className=" search-icon fas fa-search"></i>
      </div>
    </div>
  );
}

export default NavBar;

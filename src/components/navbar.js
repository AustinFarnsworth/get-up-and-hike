import React, {useEffect, useState} from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar() {
  const user = localStorage.getItem("user");

  return (
    <div className="nav-bar">
      <div className="left">
        {" "}
        {user ? (
          <h4>
            Welcome {localStorage.getItem("firstName")}{" "}
            {localStorage.getItem("lastName")}
          </h4>
        ) : (
          <h4></h4>
        )}
      </div>
      <div className="center">
        <Link to="/" className="nav-links">
          Home
        </Link>

        <Link to="about" className="nav-links">
          About
        </Link>

        <Link to="create" className="nav-links">
          Create Post
        </Link>
        <Link to="login" className="nav-links">
          Login
        </Link>
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

import React, {useEffect, useState} from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar() {
  // const [update, setUpdate] = useState("");

  // useEffect(() => {
  //   setUpdate(localStorage.getItem("firstName"));
  // });

  return (
    <div className="nav-bar">
      <div className="left">
        {/* <h4>Hello</h4>
        <h4>{localStorage.getItem("firstName")}</h4> */}
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

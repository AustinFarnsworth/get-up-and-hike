import React from "react";
import "./header.css";

function Header() {
  const user = localStorage.getItem("user");
  return (
    <div className="header-component">
      {/* <span className="welcome">
        {user ? (
          <h4>
            Welcome {localStorage.getItem("firstName")}{" "}
            {localStorage.getItem("lastName")}
          </h4>
        ) : (
          <h4></h4>
        )}
      </span> */}
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

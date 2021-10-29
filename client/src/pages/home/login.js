import React from "react";
import "./login.css";

function LoginPage() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login-header">Welcome</h1>
        <input className="login-input" type="Email" placeholder="Email"></input>
        <input
          className="login-input"
          type="Password"
          placeholder="Password"
        ></input>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

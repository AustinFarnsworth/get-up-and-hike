import React from "react";
import "./register.css";

function RegisterPage() {
  return (
    <div className="register-container">
      <form className="create-post">
        <h2>Register</h2>
        <input type="text" placeholder="Your Name"></input>
        <input type="email" placeholder=" Your Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default RegisterPage;

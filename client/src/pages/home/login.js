import React, {useState} from "react";
import "./login.css";
import {Link} from "react-router-dom";
import BlogPostFinder from "../../apis/blogAPI";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      const response = await BlogPostFinder.post("login", {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login-header">Welcome</h1>
        <input
          className="login-input"
          type="Email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="login-input"
          type="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/register" className="nav-links">
          Register
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;

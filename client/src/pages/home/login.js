import React, {useContext, useState} from "react";
import "./login.css";
import {Link} from "react-router-dom";
import BlogPostfinder from "../../apis/blogAPI";
import {useHistory} from "react-router";
import {PostsContext} from "../../context/postContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(PostsContext);
  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await BlogPostfinder.post("/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("firstName", response.data.rows[0].first_name);
      localStorage.setItem("lastName", response.data.rows[0].last_name);
      history.push("/");
    } catch (error) {}
  };

  const handleLogout = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    history.push("/");
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
        <button className="login-button" onClick={handleLogout}>
          Log Out
        </button>
        <Link to="/register" className="nav-links">
          Register
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;

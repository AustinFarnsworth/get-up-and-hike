import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import "./register.css";
import {PostsContext} from "../../context/postContext";
import BlogPostfinder from "../../apis/blogAPI";
import {Link} from "react-router-dom";

function RegisterPage() {
  const {addUsers} = useContext(PostsContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    try {
      const response = await BlogPostfinder.post("/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });

      addUsers(response.data.data.users);
      history.push("/login");
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="register-header">Register</h2>
        <input
          className="login-input"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          className="login-input"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          className="login-input"
          type="email"
          placeholder=" Your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="login-input"
          type="password"
          placeholder="Confirm Password"
        ></input>
        <div className="button-container">
          <button className="login-button" type="submit" onClick={handleSubmit}>
            Sign up
          </button>
        </div>

        <Link to="/login" className="nav-links">
          Login
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;

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
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="register-container">
      <form className="create-post">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder=" Your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="password" placeholder="Confirm Password"></input>
        <button type="submit" onSubmit={handleSubmit}>
          Sign up
        </button>

        <Link to="/login" className="nav-links">
          Login
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;

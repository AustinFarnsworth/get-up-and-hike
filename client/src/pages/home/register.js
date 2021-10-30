import React, {useContext, useState} from "react";
import "./register.css";
import axios from "axios";
import {PostsContext} from "../../context/postContext";
import BlogPostfinder from "../../apis/blogAPI";

function RegisterPage() {
  const {addUsers} = useContext(PostsContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await BlogPostfinder.post("/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {}

    // axios
    //   .get("http://localhost:5001/register", {
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
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
        <button type="submit" onChange={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

import React from "react";
import "./createPost.css";

function CreatePost() {
  return (
    <div className="create-post">
      <h2>Create Blog Post</h2>
      <form>
        <label>Blog Title: </label>
        <input type="text" required placeholder="Title" />
        <label>Post Content:</label>
        <textarea required placeholder="Post"></textarea>
        <button className="blog-button">Add Blog Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

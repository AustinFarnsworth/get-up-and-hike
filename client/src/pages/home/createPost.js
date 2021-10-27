import React from "react";
import "./createPost.css";
import {useState, useContext} from "react";
import BlogPostFinder from "../../apis/blogAPI";
import {PostsContext} from "../../context/postContext";
import swal from "sweetalert";

function CreatePost() {
  const {addBlogPost} = useContext(PostsContext);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = async (e) => {
    // prevents you from re rendering the page
    e.preventDefault();

    try {
      const response = await BlogPostFinder.post("/", {
        blog_title: title,
        post_content: post,
      });

      addBlogPost(response.data.data.post);

      swal({
        title: "Congrats",
        text: "Post was created",
        icon: "success",
      });
    } catch (err) {}
  };

  return (
    <div className="create-post">
      <h2>Create Blog Post</h2>
      <form>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post Content:</label>
        <textarea
          required
          placeholder="Post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <button className="blog-button" type="submit" onClick={handleSubmit}>
          Add Blog Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;

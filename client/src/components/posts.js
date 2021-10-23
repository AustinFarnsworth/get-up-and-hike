import React from "react";
import "./posts.css";
import PostsCard from "./postsCard";

function Posts() {
  return (
    <div className="post-container">
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
    </div>
  );
}

export default Posts;

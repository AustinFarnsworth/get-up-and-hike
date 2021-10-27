import React from "react";
import {useState, createContext} from "react";

export const PostsContext = createContext();

export const PostsContextProvider = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = (blogPost) => {
    setBlogPosts({...blogPost, blogPost});
  };

  // const editBlogPost = (editPost) => {
  //   setBlogPosts({...blogPost});
  // };

  return (
    <PostsContext.Provider
      value={{
        blogPosts: blogPosts,
        setBlogPosts: setBlogPosts,
        addBlogPost: addBlogPost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

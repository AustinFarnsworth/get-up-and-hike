import React from "react";
import {useState, createContext} from "react";

export const PostsContext = createContext();

export const PostsContextProvider = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <PostsContext.Provider
      value={{blogPosts: blogPosts, setBlogPosts: setBlogPosts}}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

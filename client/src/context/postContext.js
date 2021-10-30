import React from "react";
import {useState, createContext} from "react";

export const PostsContext = createContext();

export const PostsContextProvider = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const addBlogPost = (blogPost) => {
    setBlogPosts({...blogPost, blogPost});
  };

  const addUsers = (user) => {
    setUsers({...user, user});
  };

  // const editBlogPost = (editPost) => {
  //   setBlogPosts({...blogPost});
  // };

  return (
    <PostsContext.Provider
      value={{
        user: users,
        setUsers: setUsers,
        addUsers,
        addUsers,
        blogPosts: blogPosts,
        setBlogPosts: setBlogPosts,
        addBlogPost: addBlogPost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

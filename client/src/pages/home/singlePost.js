import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
// import {PostsContext} from "../../context/postContext";
import BlogPostFinder from "../../apis/blogAPI";
import "./singlePost.css";

function SinglePost(props) {
  // hook to find the params in a url
  const {id} = useParams();
  const [title, setTitle] = useState();
  const [post, setPost] = useState();
  const [userId, setUserId] = useState();
  const [postAuthor, setPostAuthor] = useState();
  const user = localStorage.getItem("user");
  // const firstName = localStorage.getItem("firstName");

  // const {posts, setPost} = useContext(PostsContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await BlogPostFinder.get(`/${id}`);
      setTitle(response.data.blog_title);
      setPost(response.data.post_content);
      setUserId(response.data.user_id);
      setPostAuthor(response.data.post_author);
      // console.log(response.data);
    };

    fetchData();
  }, []);

  // const authUser = function checkAuthor() {
  //   if (user === userid) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  const test = userId === user;
  console.log(test);

  return (
    <div className="single-post-container">
      {/* {post.map((el) => {
        return ( */}
      <div className="single-post">
        <img
          src="/images/snowy-mountains.jpg"
          alt="mountians"
          className="card-image"
        />
        <h1 className="post-title">{title}</h1>
        <h4>Written by: {postAuthor}</h4>
        {/* <span>{test ? <h4>written by: {postAuthor}</h4> : <h4></h4>}</span> */}

        <p className="post-info">{post}</p>
      </div>
    </div>
  );
}

export default SinglePost;

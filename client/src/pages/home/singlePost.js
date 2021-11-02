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

  // const {posts, setPost} = useContext(PostsContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await BlogPostFinder.get(`/${id}`);
      setTitle(response.data.blog_title);
      setPost(response.data.post_content);
      console.log(response.data);
    };

    fetchData();
  }, []);

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
        <h4 className="post-author">
          written by: {localStorage.getItem("firstName")}{" "}
          {localStorage.getItem("lastName")}
        </h4>
        <p className="post-info">{post}</p>
      </div>
      {/* );
      })} */}
    </div>
  );
}

export default SinglePost;

import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {PostsContext} from "../../context/postContext";
import BlogPostFinder from "../../apis/blogAPI";
import swal from "sweetalert";
import {useHistory} from "react-router";
import "./singlePost.css";

function SinglePost(props) {
  // hook to find the params in a url
  const {id} = useParams();
  const {blogPosts, setBlogPosts} = useContext(PostsContext);
  const [title, setTitle] = useState();
  const [post, setPost] = useState();
  const [userId, setUserId] = useState();
  const [postAuthor, setPostAuthor] = useState();

  let history = useHistory();

  const user = localStorage.getItem("user");

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

  const handleDelete = async (id) => {
    try {
      const response = await BlogPostFinder.delete(`/${id}`);
      setBlogPosts(
        blogPosts.filter((blogPost) => {
          return blogPost.id !== id;
        })
      );
      swal({
        title: "Congrats",
        text: "Post was deleted",
        icon: "success",
      });

      history.push("/");
    } catch (err) {}
  };

  const test = userId === user;
  // console.log(test);

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
        <h4 className="post-author">Written by: {postAuthor}</h4>
        <div className="delete-container">
          <span className="delete">
            {test ? (
              <i
                onClick={() => handleDelete(id)}
                class="fas fa-trash-alt fa-2x"
              ></i>
            ) : (
              <h4></h4>
            )}
          </span>
        </div>

        <p className="post-info">{post}</p>
      </div>
    </div>
  );
}

export default SinglePost;

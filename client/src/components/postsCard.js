import React, {useContext, useEffect} from "react";
import "./postsCard.css";
import BlogPostFinder from "../apis/blogAPI";
import {PostsContext} from "../context/postContext";
import {useHistory} from "react-router";

const PostsCard = (props) => {
  const {blogPosts, setBlogPosts} = useContext(PostsContext);
  // history of the browser
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BlogPostFinder.get("/");

        setBlogPosts(response.data.data.posts);
      } catch (err) {}
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
    } catch (err) {}
  };

  const handleReadMore = async (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <div className="card">
      {blogPosts.map((el) => {
        blogPosts.sort(function (a, b) {
          return b.id - a.id;
        });
        return (
          <div className="square" key={el.id}>
            <img
              src="/images/snowy-mountains.jpg"
              alt="mountians"
              className="card-image"
            />
            <h1 class="card-title">{el.blog_title}</h1>
            <p className="card-info">{el.post_content}</p>
            <div className="bottom-card-container">
              <a onClick={() => handleReadMore(el.id)} className="card-button">
                Read More
              </a>
              <div className="author">
                written by: {localStorage.getItem("firstName")}{" "}
                {localStorage.getItem("lastName")}
              </div>
            </div>

            {/* <button onClick={() => handleDelete(el.id)}>Delete Post</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default PostsCard;

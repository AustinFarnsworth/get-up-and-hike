import React, {useContext, useEffect} from "react";
import "./postsCard.css";
import BlogPostFinder from "../apis/blogAPI";
import {PostsContext} from "../context/postContext";

const PostsCard = (props) => {
  const {blogPosts, setBlogPosts} = useContext(PostsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BlogPostFinder.get("/");
        console.log(response);
        setBlogPosts(response.data.data.posts);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      {blogPosts.map((el) => {
        return (
          <div className="square" key={el.id}>
            <img
              src="/images/snowy-mountains.jpg"
              alt="mountians"
              className="card-image"
            />
            <h1 class="card-title">{el.blog_title}</h1>
            <p className="card-info">{el.post_content}</p>
            <div>
              <a href="/" className="card-button">
                Read More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsCard;

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
        setBlogPosts(response.data.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      {blogPosts.map((el) => {
        <h1>{el.blog_title}</h1>;
      })}

      {/* {blogPosts.map((el) => {
        <div className="square">
          <img
            src="/images/snowy-mountains.jpg"
            alt="mountians"
            className="card-image"
          />
          <h1 class="card-title">{el.blog_title}</h1>
          <p className="card-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lacinia eu odio et tincidunt. Fusce a augue dapibus, gravida est
            vitae, fringilla magna. Integer blandit nisi sit amet tortor
            fringilla, ac convallis libero condimentum. Fusce maximus luctus ex,
            id tempor orci hendrerit et. Maecenas tristique condimentum
            volutpat. Etiam non elit vel enim placerat consectetur. Proin eu
            urna sed massa tristique volutpat non quis tellus. Donec feugiat
            rutrum tellus, non blandit ex. Quisque sollicitudin, felis at
            facilisis tristique, mauris ligula ultricies neque, id accumsan
            felis enim eget est. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla semper laoreet quam
            tempor rhoncus. Sed ornare enim lacus, at interdum metus finibus in.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </p>
          <div>
            <a href="/" className="card-button">
              Read More
            </a>
          </div>
        </div>;
      })} */}
    </div>
  );
};

export default PostsCard;

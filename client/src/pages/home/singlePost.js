import React, {useContext, useEffect} from "react";
import {useParams} from "react-router";
import {PostsContext} from "../../context/postContext";
import BlogPostFinder from "../../apis/blogAPI";
import "./singlePost.css";

function SinglePost(props) {
  // hook to find the params in a url
  const {id} = useParams();

  const blogPost = useContext(PostsContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await BlogPostFinder.get(`/${id}`);
      console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="single-post-container">
      <div className="single-post">
        <img
          src="/images/snowy-mountains.jpg"
          alt="mountians"
          className="card-image"
        />
        <h1 className="post-title">Blog title</h1>
        <p className="post-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lacinia eu odio et tincidunt. Fusce a augue dapibus, gravida est
          vitae, fringilla magna. Integer blandit nisi sit amet tortor
          fringilla, ac convallis libero condimentum. Fusce maximus luctus ex,
          id tempor orci hendrerit et. Maecenas tristique condimentum volutpat.
          Etiam non elit vel enim placerat consectetur. Proin eu urna sed massa
          tristique volutpat non quis tellus. Donec feugiat rutrum tellus, non
          blandit ex. Quisque sollicitudin, felis at facilisis tristique, mauris
          ligula ultricies neque, id accumsan felis enim eget est. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nulla semper laoreet quam tempor rhoncus. Sed ornare enim
          lacus, at interdum metus finibus in. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae;
        </p>
      </div>
    </div>
  );
}

export default SinglePost;

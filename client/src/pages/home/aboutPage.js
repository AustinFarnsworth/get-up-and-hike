import React from "react";
import "./aboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page-left">
        <h2>About the Creator</h2>
        <h3>Created By Austin Farnsworth</h3>
        <p className="about-info">
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
      <div className="about-page-right">
        <img
          src="/images/austin-hike.jpg"
          alt="blog creater"
          className="about-pic"
        />
      </div>
    </div>
  );
}

export default AboutPage;

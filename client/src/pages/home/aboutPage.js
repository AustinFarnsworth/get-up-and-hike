import React from "react";
import "./aboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page-left">
        <h2>About the Creator</h2>
        <h3>Created By Austin Farnsworth</h3>
        <p className="about-info">
          Get Up And Hike was built by its creator Austin Farnsworth as a
          capstone project while attending Devmountain specializing in the Web
          Development program. It is a full stack app built in the PERN stack,
          PostgreSQL, Express, React, and Node. Austin wanted to take his love
          for the outdoors and his new found passion for tech and development
          and try to merge those two areas.
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

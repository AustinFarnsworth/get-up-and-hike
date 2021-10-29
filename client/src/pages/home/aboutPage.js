import React from "react";
import "./aboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page-left">
        <div className="about-card">
          <h2>About the Creator</h2>
          <h3>Created By Austin Farnsworth</h3>
          <p className="about-info">
            Get Up And Hike was built by its creator Austin Farnsworth as a
            capstone project while attending Devmountain specializing in the Web
            Development program. It is a full stack app built in the PERN stack,
            PostgreSQL, Express, React, and Node. Austin wanted to take his love
            for the outdoors and his new found passion for tech and merge them
            together.
          </p>
          <h2>Feel free to reach out at:</h2>
          <div className="about-icons">
            <a href="https://www.linkedin.com/in/austin-farnsworth/">
              <i class="fab fa-linkedin fa-3x linkedin"></i>
            </a>
            <a href="https://github.com/AustinFarnsworth">
              <i class="fab fa-github fa-3x github"></i>
            </a>
            <a href="https://twitter.com/AustinFarnswor1">
              <i class="fab fa-twitter fa-3x twitter"></i>
            </a>
          </div>
          <div className="form-container">
            <form
              clasName="email-form"
              action="https://formspree.io/f/xoqyoqjl"
              method="POST"
            >
              <label>Your email:</label>
              <input type="email" name="_replyto" />

              <label>Your message:</label>
              <textarea name="message"></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="about-page-right">
        <img
          src="/images/austin-mountain.jpg"
          alt="blog creater"
          className="about-pic"
        />
      </div>
    </div>
  );
}

export default AboutPage;

import React from "react";
import "./homePage.css";
import Header from "../../header/header";
import Posts from "../../components/posts";
import SideBar from "../../components/sidebar";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="posts-container">
        <SideBar />
        <Posts />
      </div>
    </div>
  );
}

export default HomePage;

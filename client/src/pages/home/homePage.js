import React from "react";
import "./homePage.css";
import Header from "../..//header/header";
import PostsCard from "../../components/postsCard";
import SideBar from "../../components/sidebar";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="posts-container">
        <SideBar />
        <PostsCard />
      </div>
    </div>
  );
}

export default HomePage;

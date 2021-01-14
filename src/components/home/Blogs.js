import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <div className="blogs-section">
      <p className="title-intro">Blog</p>
      <h2 className="title">Recent Blog</h2>
      <div className="blog-container">
        <Blog image="1" />
        <Blog image="2" />
        <Blog image="3" />
        <Blog image="4" />
      </div>
    </div>
  );
}

export default Blogs;

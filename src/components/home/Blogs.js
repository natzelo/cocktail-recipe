import React from "react";
import Fade from "react-reveal/Fade";
import Blog from "./Blog";

function Blogs() {
  return (
    <Fade bottom>
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
    </Fade>
  );
}

export default Blogs;

import React from "react";

function Blog(props) {
  return (
    <div className="blog">
      <div
        className="blog-img"
        style={{ backgroundImage: `url("images/image_${props.image}.jpg")` }}
      ></div>
      <div className="content">
        <p>
          {" "}
          <i class="far fa-calendar-alt"></i> 24 April 2020
        </p>
        <p className="blog-title">The Recipe from a Winemaker’s Restaurent</p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <a href="/">Read More</a>
      </div>
    </div>
  );
}

export default Blog;

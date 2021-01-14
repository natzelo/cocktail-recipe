import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CommentCard from "./CommentCard";
import bg2 from "../../images/test.jpg";
function Testimonial() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    updatePredicate();
    window.addEventListener("resize", updatePredicate);

    return function cleanup() {
      window.removeEventListener("resize", updatePredicate);
    };
  }, []);

  const updatePredicate = () => {
    setIsDesktop(window.innerWidth > 500);
  };
  return (
    <>
      <Parallax bgImage={bg2} strength={300}>
        <Fade bottom>
          <div className="testimonial-wrapper">
            <p className="title-intro">Testimonial</p>
            <h2 className="title">Happy Clients</h2>
            <Carousel
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              autoPlay={true}
              centerMode={true}
              centerSlidePercentage={isDesktop ? 60 : 100}
            >
              <div className="comment-wrapper">
                <CommentCard />
              </div>
              <div className="comment-wrapper">
                <CommentCard />
              </div>
              <div className="comment-wrapper">
                <CommentCard />
              </div>
              <div className="comment-wrapper">
                <CommentCard />
              </div>
            </Carousel>
          </div>
        </Fade>
      </Parallax>
    </>
  );
}

export default Testimonial;

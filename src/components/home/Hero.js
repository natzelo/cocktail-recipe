import React from "react";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import bgImg from "../../images/hero-bg.jpg";
function Hero() {
  return (
    <>
      <Parallax bgImage={bgImg} strength={500}>
        <div className="hero">
          <Fade bottom>
            <div className="title-wrapper">
              <h1 className="rotate">
                {" "}
                <span className="hollow">Good</span> Drink{" "}
                <span className="hollow">for </span>
                <span className="hollow">Good</span> Moments
                <span className="hollow">.</span>
              </h1>
              <div className="btn-wrapper rotate">
                <button>Shop Now</button>
                <button className="second">Read more</button>
              </div>
            </div>
          </Fade>
        </div>
      </Parallax>
    </>
  );
}

export default Hero;

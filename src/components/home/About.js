import React from "react";
import Fade from "react-reveal/Fade";
import aboutImg from "../../images/about.jpg";
function About() {
  return (
    <div className="about">
      <div className="img-wrapper">
        <img src={aboutImg} alt="about" />
      </div>
      <Fade bottom delay={1100}>
        <div className="content">
          <p>Since 1905</p>
          <h3>Desire Meets A New Taste</h3>
          <p className="text">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
            <br /> On her way she met a copy. The copy warned the Little Blind
            Text, that where it came from it would have been rewritten a
            thousand times and everything that was left from its origin would be
            the word "and" and the Little Blind Text should turn around and
            return to its own, safe country.
          </p>
          <h4>
            {" "}
            <span className="number">115</span> Years of Experience In Business
          </h4>
        </div>
      </Fade>
    </div>
  );
}

export default About;

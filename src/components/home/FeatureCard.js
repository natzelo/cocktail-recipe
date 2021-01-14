import React from "react";
import Fade from "react-reveal/Fade";
function FeatureCard(props) {
  return (
    <Fade bottom delay={props.delay}>
      <div
        className="feature-card"
        style={{ backgroundColor: props.background }}
      >
        <div className="icon">
          <i className={`fas ${props.icon}`}></i>
        </div>
        <div className="text">
          <h4>{props.title}</h4>
          <p>{props.des}</p>
        </div>
      </div>
    </Fade>
  );
}

export default FeatureCard;

import React from "react";
import Fade from "react-reveal/Fade";
function Variety(props) {
  return (
    <Fade bottom>
      <div className="variety">
        <div className="outer-circle">
          <div className={`inner-circle kind-${props.kind + 1}`}></div>
        </div>
        <p>{props.name}</p>
      </div>
    </Fade>
  );
}

export default Variety;

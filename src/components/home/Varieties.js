import React from "react";
import Variety from "./Variety";

function Varieties() {
  const varieties = ["Brandy", "Gin", "Rum", "Tequila", "Vodka", "Whiskey"];

  const varietyCards = varieties.map((variety, index) => (
    <Variety kind={index} name={variety} />
  ));
  return <div className="varieties">{varietyCards};</div>;
}

export default Varieties;

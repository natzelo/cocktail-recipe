import React from "react";
import Fade from "react-reveal/Fade";
import CocktailCard from "./CocktailCard";
import NotFound from "./NotFound";

function Cocktails(props) {
  if (props.cocktails === null) {
    return <NotFound />;
  }
  const renderedCocktails = props.cocktails.map(
    ({
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strGlass,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strInstructions,
    }) => {
      return (
        <li style={{ listStyle: "none" }}>
          <CocktailCard
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
            strAlcoholic={strAlcoholic}
            strGlass={strGlass}
            strIngredient1={strIngredient1}
            strIngredient2={strIngredient2}
            strIngredient3={strIngredient3}
            strMeasure1={strMeasure1}
            strMeasure2={strMeasure2}
            strMeasure3={strMeasure3}
            strInstructions={strInstructions}
          />
        </li>
      );
    }
  );
  return (
    <>
      <Fade right cascade spy={props.cocktails} appear>
        <ul className="cocktails">{renderedCocktails}</ul>
      </Fade>
    </>
  );
}

export default Cocktails;

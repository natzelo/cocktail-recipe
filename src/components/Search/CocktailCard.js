import React from "react";
import { useState } from "react";
import { Collapse } from "react-collapse";

function CocktailCard(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="whole-card">
      <div className="brief">
        <div className="cocktail-img-wrapper">
          <img src={props.strDrinkThumb} alt="" />
        </div>
        <div className="content">
          <h2>{props.strDrink}</h2>
          <p className="bullet">
            {" "}
            <span style={{ fontWeight: "bold" }}>Kind</span>:{" "}
            {props.strAlcoholic}
          </p>
          <p className="bullet">
            <span style={{ fontWeight: "bold" }}>Glass</span>: {props.strGlass}
          </p>
          <p className="i-header">Ingredients</p>
          <div className="ind-table">
            <div className="ind">
              <p>{props.strIngredient1}</p>
              <p>{props.strMeasure1}</p>
            </div>
            <div className="ind">
              <p>{props.strIngredient2}</p>
              <p>{props.strMeasure2}</p>
            </div>
            <div className="ind">
              <p>{props.strIngredient3}</p>
              <p>{props.strMeasure3}</p>
            </div>
          </div>
          <div className="card-btn-wrapper">
            <button onClick={() => setCollapsed(!collapsed)}>
              Instructions
            </button>
          </div>
        </div>
      </div>

      <div>
        <Collapse isOpened={collapsed}>
          <div className="collapse">
            <h4>How to make it</h4>
            <p>{props.strInstructions}</p>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default CocktailCard;

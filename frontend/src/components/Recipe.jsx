import React from "react";

import "../styles/recipe.scss";

const Recipe = function(props) {

  return (
    <article className="recipe">

      <div className="recipe-text">
        <h2 className="recipe-title">{props.name}</h2>
        <ol>
          {props.directions.map(direction => (<li> {direction} </li>))}
        </ol>
      </div>

      <img src={props.image} alt={props.name} className="recipe-img" />

    </article>
  );
};

export default Recipe;
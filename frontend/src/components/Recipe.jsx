/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

import "../styles/recipe.scss";

const Recipe = function(props) {

  // const ingredients = props.getIngredients(props.key);

  return (
    <article className="recipe">

      <div className="recipe-text">
        <h2 className="recipe-title">{props.name}</h2>

        <ul>
          <li>Estimate cooktime: {props.cooktime} min</li>
          {props.is_vegetarian && <li>Vegetarian</li>}
          {props.is_vegans_lowcarb && <li>Low Carb</li>} 
          {props.is_lactosefree && <li>Lactose Free</li>}
          {props.is_glutenfree && <li>Gluten Free</li>}
          {props.is_nutfree && <li>Nut Free</li>}
        </ul>
        <ol>
          {props.directions.map((direction, i) => (<li key ={i}> {direction} </li>))}
        </ol>

      </div>

      <img src={props.image} alt={props.name} className="recipe-img" />

    </article>
  );
};

export default Recipe;
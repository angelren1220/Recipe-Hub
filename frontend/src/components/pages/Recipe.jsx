import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import { useLocation } from 'react-router-dom';
const Recipe = function(props) {

  // console.log(props);

  // const {
  //   state,
  //   getIngredients
  // } = useApplicationData();

  // useEffect(() => {
  //   getIngredients(props.id);
  //   // console.log("🐹", props.id);
  // }, []);

  // return (
  //   <article className="recipe">

  //     <div className="recipe-text">
  //       <h2 className="recipe-title">{props.name}</h2>
  //       <span>description</span>
  //       <p>{props.description}</p>
  //       <span>ingredients</span>
  //       <ul>
  //         {state.ingredients.map((ingredient, i) => (<li key={i}>{ingredient.name}: {ingredient.quantity} {ingredient.units}</li>))}
  //       </ul>
  //       <ul>
  //         <li>Estimate cooktime: {props.cooktime_minutes} min</li>
  //         {props.is_vegetarian && <li>Vegetarian</li>}
  //         {props.is_vegans_lowcarb && <li>Low Carb</li>}
  //         {props.is_lactosefree && <li>Lactose Free</li>}
  //         {props.is_glutenfree && <li>Gluten Free</li>}
  //         {props.is_nutfree && <li>Nut Free</li>}
  //       </ul>
  //       <span>directions</span>
  //       <ol>
  //         {props.directions.map((direction, i) => (<li key={i}> {direction} </li>))}
  //       </ol>

  //     </div>

  //     <img src={props.image} alt={props.name} className="recipe-img" />

  //   </article>
  // );
  return (
    <article className="recipe">
      <h1>Single recipe information goes here</h1>
    </article>
  );

};

export default Recipe;
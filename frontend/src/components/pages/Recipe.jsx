import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from 'react-router-dom';
const Recipe = function(props) {
  const { id } = useParams();

  // console.log(id);

  const {
    state,
    getRecipeById,
    getIngredients
  } = useApplicationData();

  useEffect(() => {
    getRecipeById(id);
    getIngredients(id);
  }, []);

  const { recipe, ingredients } = state;

  if (!recipe || !recipe.directions) {
    return <div>Loading...</div>;
  }

  return (
    <article className="recipe">

      <div className="recipe-text">
        <h2 className="recipe-title">{recipe.name}</h2>
        <span>description</span>
        <p>{recipe.description}</p>
        <span>ingredients</span>
        <ul>
          {ingredients.map((ingredient, i) => (<li key={i}>{ingredient.name}: {ingredient.quantity} {ingredient.units}</li>))}
        </ul>
        <ul>
          <li>Estimate cooktime: {recipe.cooktime_minutes} min</li>
          {recipe.is_vegetarian && <li>Vegetarian</li>}
          {recipe.is_vegans_lowcarb && <li>Low Carb</li>}
          {recipe.is_lactosefree && <li>Lactose Free</li>}
          {recipe.is_glutenfree && <li>Gluten Free</li>}
          {recipe.is_nutfree && <li>Nut Free</li>}
        </ul>
        <span>directions</span>
        <ol>
          {recipe.directions.map((direction, i) => (<li key={i}> {direction} </li>))}
        </ol>

      </div>

      <img src={recipe.image} alt={recipe.name} className="recipe-img" />

    </article>
  );

};

export default Recipe;
import React from "react";

import "../styles/recipe.scss"

const Recipe = function() {
  const recipe = {
    id: 1,
    userId: 1,
    name: "Vegan Pad Thai",
    directions: [
      "Soak the noodles",
      "Cook the noodles",
      "Prepare the sauce",
      "Cook the vegetables",
      "Combine everything"
    ],
    cooktimeMinutes: 30,
    isVegetarian: true,
    isvegan: true,
    isLowcarb: false,
    isLactosefree: true,
    isGlutenfree: false,
    isNutfree: false,
    createdAt: "2023-05-14T11:36:47.413Z",
    updatedAt: "2023-05-14T11:36:47.413Z",
    image: "https://pinchofyum.com/wp-content/uploads/Vegetarian-Pad-Thai-Recipe.jpg"
  };

  return (
    <article className="recipe">

      <div className="recipe-text">
        <h2 className="recipe-title">{recipe.name}</h2>
        <ul>
          <li>2lbs Potatoes</li>
          <li>1 egg</li>
          <li>1.5 cups flour</li>
          <li>2 tsp salt</li>
        </ul>
        <ol>
          {recipe.directions.map(direction => (<li key={recipe.id} > { direction } </li>))}
        </ol>
      </div>

      <img src={recipe.image} alt={recipe.name} className="recipe-img"/>

    </article>
  );
};

export default Recipe;
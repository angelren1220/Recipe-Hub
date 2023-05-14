import React from "react";

import "../styles/recipe.css"

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
      <h2>{recipe.name}</h2>

      <div className="recipe-intro">
        <ul>
          <li>2lbs Potatoes</li>
          <li>1 egg</li>
          <li>1.5 cups flour</li>
          <li>2 tsp salt</li>
        </ul>
        <img src={recipe.image} alt={recipe.name} className="recipe-img"/>
      </div>

      <ol>
        {recipe.directions.map(direction => (<li key={recipe.id} > { direction } </li>))}
      </ol>

    </article>
  );
};

export default Recipe;
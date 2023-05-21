import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import DirectionForm from "./DirectionForm";

const EditRecipeDirections = function() {
  const {
    currentRecipe,
    setRecipeDirection,
    newRecipeDirection,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(recipeEditContext);


  console.log(currentRecipe.directions);
  return (
    <>
      <h1>Edit Recipe Directions</h1>
      <ul>
        {currentRecipe && currentRecipe.directions.map((direction, index) => {
          console.log('🐲', direction, index);
          return (
            <li key={`direction${index}`}>
              <DirectionForm index={index} />
            </li>
          );
        })}
      </ul>
      <button onClick={newRecipeDirection}>+ Add Direction +</button>
      <button onClick={recipeIngredientsView}>Back</button>
    </>
  );
};

export default EditRecipeDirections;
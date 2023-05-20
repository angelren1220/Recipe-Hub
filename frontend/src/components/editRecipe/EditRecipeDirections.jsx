import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import DirectionForm from "./DirectionForm";

const EditRecipeDirections = function() {
  const {
    currentRecipe,
    setRecipeDirection,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(recipeEditContext);

  const addDirection = function() {
    console.log('🥇', "ADD DIRECTION");
    setRecipeDirection((currentRecipe.directions.length + 1), '');
  };

  console.log(currentRecipe.directions);
  let directionCount = -1;
  return (
    <>
      <h1>Edit Recipe Directions</h1>
      <ul>
        {currentRecipe && currentRecipe.directions.map(() => {
          directionCount++;
          return (
            <li key={`direction${directionCount}`}><DirectionForm index={directionCount} /></li>
          );
        })}
      </ul>
      <button onClick={addDirection}>+ Add Direction +</button>
      <button onClick={recipeIngredientsView}>Back</button>
    </>
  );
};

export default EditRecipeDirections;
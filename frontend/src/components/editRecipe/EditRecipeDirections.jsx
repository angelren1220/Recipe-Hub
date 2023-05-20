import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import DirectionForm from "./DirectionForm";

const EditRecipeDirections = function()  {
  const {
    currentRecipe,
    setRecipeDirection,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(recipeEditContext);
  
  let directionCount = -1

  const addDirection = function() {
    console.log('🥇', "ADD DIRECTION")
  }

  return (
    <>
      <h1>Edit Recipe Directions</h1>
      <ul>
        {currentRecipe.directions.map(() => {
          directionCount++
          console.log('🏵', `direction${directionCount}`)
          return (
            <li><DirectionForm key={`direction${directionCount}`} index={directionCount}/></li>
          )
        })}
      </ul>
      <button onClick={addDirection}>+ Add Direction +</button>
      <button onClick={recipeIngredientsView}>Back</button>
    </>
  );
};

export default EditRecipeDirections;
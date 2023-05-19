import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const EditRecipeDirections = function() {

  const {
    currentRecipe,
    setRecipeDirections,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(recipeEditContext);

  return (
    <>
      <h1>Edit Recipe Directions</h1>
      <button onClick={recipeIngredientsView}>Back</button>
    </>
  );
};

export default EditRecipeDirections;
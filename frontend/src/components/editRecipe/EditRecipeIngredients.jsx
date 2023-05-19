import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import IngredientForm from "./IngredientForm";

const EditRecipeIngredients = function(props) {
  const {
    currentIngredients,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView,
  } = useContext(recipeEditContext);

  const addIngredient = function() {
    console.log('🍍ADD INGREDIENT🍍');
  };

  console.log(currentIngredients);

  return (
    <>
      <h1>Edit Recipe Ingredients</h1>
      <ul>
        {currentIngredients.map(ingredient => {
          return (
            <li key={`ingredient${ingredient.id}`}>
              <IngredientForm id={ingredient.id} />
            </li>
          );
        })}
      </ul>
      <button onClick={addIngredient}>+ Add Ingredient +</button>
      <button onClick={recipeSummaryView}>Back</button>
      <button onClick={recipeDirectionsView}>Next</button>
    </>
  );
};

export default EditRecipeIngredients;
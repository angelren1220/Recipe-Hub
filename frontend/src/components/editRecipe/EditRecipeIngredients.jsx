import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import useApplicationData from "../../hooks/useApplicationData";

import IngredientForm from "./IngredientForm";

const EditRecipeIngredients = function(props) {
  const { createIngredient } = useApplicationData();
  const {
    currentRecipe,
    currentIngredients,
    setIngredients,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView,
  } = useContext(recipeEditContext);

  const addIngredient = function() {
    const newIngredient = {
      recipe_id: currentRecipe.id,
      name: "Ingredient",
      quantity: 1,
      units: "Units"
    };
    createIngredient(newIngredient);
    setIngredients([...currentIngredients, newIngredient]);
  };

  return (
    <>
      <h1>Edit Recipe Ingredients</h1>
      <ul>
        {currentIngredients && currentIngredients.map(ingredient => {
          return (
            <li key={`ingredient-list-${ingredient.id}`}>
              <IngredientForm key={`ingredient-form-${ingredient.id}`} ingredient={ingredient} />
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
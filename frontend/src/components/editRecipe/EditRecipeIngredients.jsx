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

  const addIngredient = async function() {
    let newIngredient = {
      recipe_id: currentRecipe.id,
      name: "",
      quantity: 0,
      units: ""
    };
    newIngredient = await createIngredient(newIngredient);
    setIngredients([...currentIngredients, newIngredient]);
  };

  return (
    <>
      <h1>Edit Recipe Ingredients</h1>
      <div className="all-ingredients-form">
        {currentIngredients && currentIngredients.map((ingredient) => {
          return (
            <div key={`ingredient-list-${ingredient.id}`}>
              <IngredientForm key={`ingredient-form-${ingredient.id}`} ingredient={ingredient} />
            </div>
          );
        })}
      </div>
      <div className="add-ingredient">
        <button onClick={addIngredient}>+ Add Ingredient +</button>
      </div>
      <div className="back-next">
        <button onClick={recipeSummaryView}>Back</button>
        <button onClick={recipeDirectionsView}>Next</button>
      </div>
    </>
  );
};

export default EditRecipeIngredients;
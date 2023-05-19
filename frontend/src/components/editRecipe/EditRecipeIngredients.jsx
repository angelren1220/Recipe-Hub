import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import IngredientForm from "./IngredientForm";

const EditRecipeIngredients = function(props) {
  const {
    currentIngredients,
  } = useContext(recipeEditContext);

  console.log(currentIngredients);

  return (
    <>
      <h1>Edit Recipe Ingredients</h1>
      {currentIngredients.map(ingredient => {
        return (
          <>
            <IngredientForm id={ingredient.id} />
          </>
        );
      })}
    </>
  );
};

export default EditRecipeIngredients;
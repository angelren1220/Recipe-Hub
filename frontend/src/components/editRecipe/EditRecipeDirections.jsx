import { useState, useContext } from "react";
import { viewModeContext } from "../../hooks/providers/viewModeProvider";

const EditRecipeDirections = function(props) {
  const getRecipeIngredients = {};
  const [ingredients, setIngredients] = useState(getRecipeIngredients);
  return (
    <>
      <h1>Edit Recipe Ingredients</h1>
      <p>Ingredients</p>
      <button >To Summary</button>
    </>
  );
};

export default EditRecipeDirections;
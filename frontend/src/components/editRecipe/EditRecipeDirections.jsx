import { useState, useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const EditRecipeDirections = function(props) {

  const [directionCount, setDirectionCount] = useState(0);

  const {
    currentRecipe,
    setRecipeDirections
  } = useContext(recipeEditContext);

  return (
    <>
      <h1>Edit Recipe Directions</h1>
      {currentRecipe.directions.map(direction => <p>{direction}</p>)}
    </>
  );
};

export default EditRecipeDirections;
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";

import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import EditRecipeSummary from "../editRecipe/EditRecipeSummary";
import EditRecipeIngredients from "../editRecipe/EditRecipeIngredients";
import EditRecipeDirections from "../editRecipe/EditRecipeDirections";

const EditRecipe = function() {
  const {
    currentRecipe,
    currentIngredients,
    recipeEditMode,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(recipeEditContext);

  const {
    state,
    dispatch,
    getRecipesByUserID,
    updateRecipe
  } = useApplicationData();

  //current recipe id being edited
  const { recipeId } = useParams();
  console.log('********', recipeId);

  useEffect(() => {
    const editedRecipe = getRecipesByUserID(1);

    console.log("🐹", editedRecipe);
  }, []);

  const handleSubmit = function() {
    console.log('🐯', currentRecipe);
    console.log('🐮', currentIngredients);
    //update ingredients here too!
  };

  return (
    <>
      <div>
        <button onClick={() => recipeSummaryView()}>Edit Summary</button>
        <button onClick={() => recipeIngredientsView()}>Edit Ingredients</button>
        <button onClick={() => recipeDirectionsView()}>Edit Directions</button>
      </div>
      <div>
        {recipeEditMode === 'SUMMARY' && <EditRecipeSummary />}
        {recipeEditMode === 'INGREDIENTS' && <EditRecipeIngredients />}
        {recipeEditMode === 'DIRECTIONS' && <EditRecipeDirections />}
      </div>
      <button onClick={handleSubmit}>Publish</button>

    </>
  );
};

export default EditRecipe;
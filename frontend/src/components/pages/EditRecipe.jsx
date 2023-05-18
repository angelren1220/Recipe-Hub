import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";

import RecipeEditMode, { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import EditRecipeSummary from "../editRecipe/EditRecipeSummary";
import EditRecipeIngredients from "../editRecipe/EditRecipeIngredients";
import EditRecipeDirections from "../editRecipe/EditRecipeDirections";

const EditRecipe = function() {
  const {
    recipeEditMode,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(recipeEditContext);

  const {
    state,
    dispatch,
    getRecipesByUserID
  } = useApplicationData();

  //current recipe id being edited
  const { id } = useParams();
  console.log('********', id);

  useEffect(() => {
    const editedRecipe = getRecipesByUserID(1);

    console.log("🐹", editedRecipe);
  }, []);

  return (
    <>
      <div className="viewModes">
        <button onClick={() => recipeSummaryView()}>Edit Summary</button>
        <button onClick={() => recipeIngredientsView()}>Edit Ingredients</button>
        <button onClick={() => recipeDirectionsView()}>Edit Directions</button>
      </div>
      {recipeEditMode === 'SUMMARY' && <EditRecipeSummary />}
      {recipeEditMode === 'INGREDIENTS' && <EditRecipeIngredients />}
      {recipeEditMode === 'DIRECTIONS' && <EditRecipeDirections />}

    </>
  );
};

export default EditRecipe;
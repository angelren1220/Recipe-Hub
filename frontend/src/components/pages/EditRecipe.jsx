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
    updateRecipe,
    updateIngredient
  } = useApplicationData();

  //current recipe id being edited
  const { recipeId } = useParams();
  console.log('********', recipeId);
  //current user id from cookie
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const editedRecipe = getRecipesByUserID(1);

    console.log("🐹", editedRecipe);
  }, []);

  const handleSubmit = function() {
    console.log('🐯', currentRecipe);
    console.log('🐮', currentIngredients);
    updateRecipe(currentRecipe.id, currentRecipe);
    currentIngredients.map(ingredient => updateIngredient(ingredient.id, ingredient));

  };

  return (
    <>
      <main>
        {recipeEditMode === 'SUMMARY' && <EditRecipeSummary />}
        {recipeEditMode === 'INGREDIENTS' && <EditRecipeIngredients />}
        {recipeEditMode === 'DIRECTIONS' && <EditRecipeDirections />}
      </main>
      <button onClick={handleSubmit}>Publish</button>

    </>
  );
};

export default EditRecipe;
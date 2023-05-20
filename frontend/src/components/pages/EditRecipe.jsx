import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";

import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

import EditRecipeSummary from "../editRecipe/EditRecipeSummary";
import EditRecipeIngredients from "../editRecipe/EditRecipeIngredients";
import EditRecipeDirections from "../editRecipe/EditRecipeDirections";

const EditRecipe = function() {
  const {
    recipeEditMode,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView,
    currentRecipe,
    setRecipe,
    setRecipeName,
    setRecipeDescription,
    setRecipeCooktime,
    setRecipeImage,
    setRecipeFlag,
    setRecipeDirection,
    currentIngredients,
    setIngredient,
    setIngredients,
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

  //submit recipe and ingredients to the db
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
      <Link to={`/recipes/${currentRecipe.id}`}>Reset Changes</Link>
      <Link to={`/recipes/${currentRecipe.id}`} onClick={handleSubmit}>Publish</Link>

    </>
  );
};

export default EditRecipe;
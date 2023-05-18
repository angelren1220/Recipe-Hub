import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";
import { viewModeContext } from "../../hooks/providers/viewModeProvider";

import EditRecipeSummary from "../editRecipe/EditRecipeSummary";
import EditRecipeIngredients from "../editRecipe/EditRecipeIngredients";
import EditRecipeDirections from "../editRecipe/EditRecipeDirections";

const EditRecipe = function() {
  const {
    viewMode,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(viewModeContext);

  const {
    state,
    dispatch,
    getRecipesByUserID
  } = useApplicationData();

  //current recipe id being edited
  const { id } = useParams();
  console.log('********', id);

  let editedRecipe = {}

  useEffect(() => {
    editedRecipe = getRecipesByUserID(1);

    console.log("🐹", editedRecipe);
  }, []);

  console.log("🐶", editedRecipe);



  return (
    <>
      <div className="viewModes">
        <button onClick={() => recipeSummaryView()}>Edit Summary</button>
        <button onClick={() => recipeIngredientsView()}>Edit Ingredients</button>
        <button onClick={() => recipeDirectionsView()}>Edit Directions</button>
      </div>
      {viewMode === 'SUMMARY' && <EditRecipeSummary />}
      {viewMode === 'INGREDIENTS' && <EditRecipeIngredients />}
      {viewMode === 'DIRECTIONS' && <EditRecipeDirections />}
    </>
  );
};

export default EditRecipe;
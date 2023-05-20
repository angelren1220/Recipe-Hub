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
    recipeLockedView,
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
    getRecipesByUserId,
    updateRecipe,
    updateIngredient
  } = useApplicationData();

  //current recipe id from the url
  const { id } = useParams();
  
  //used to check if a user's recipe list contains the recipe they are trying to edit
  const findRecipeById = function(recipeId, recipes) {
    const editRecipe = recipes.find(recipe => recipe.id === parseInt(recipeId));
    console.log('🐬', recipes, recipeId);
    if (editRecipe) {
      return editRecipe;
    }
    return null;
  };
  
  //set the currentRecipe to the recipe with the id matching the url only if the user owns the recipe
  useEffect(() => {
    const getRecipe = async () => {
      const userId = await localStorage.getItem('userId');
      const userInfo = await getRecipesByUserId(userId);
      const userRecipes = userInfo.recipes;
      const ownedRecipe = findRecipeById(id, userRecipes);
      (ownedRecipe && recipeSummaryView());
      console.log('AAAA', userRecipes);
      console.log('🦁',ownedRecipe);
      setRecipe(ownedRecipe);
    };
    getRecipe();
  }, [id]);

  //submit recipe and ingredients to the db
  const handleSubmit = function() {
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
      {recipeEditMode === 'LOCKED' && <Link to={'/recipes'}><button>Back</button></Link>}
      {currentRecipe &&
        <>
          <Link to={`/recipes/${currentRecipe.id}`}><button>Reset Changes</button></Link>
          <Link to={`/recipes/${currentRecipe.id}`} onClick={handleSubmit}><button>Publish</button></Link>
        </>
      }

    </>
  );
};

export default EditRecipe;
import '../../styles/edit_recipe.scss';

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
    currentRecipe,
    setRecipe,
    currentIngredients,
    setIngredients,
  } = useContext(recipeEditContext);

  const {
    state,
    dispatch,
    getRecipesByUserId,
    updateRecipe,
    getIngredients,
    updateIngredient,
    deleteIngredient,
  } = useApplicationData();

  //current recipe id from the url
  const { id } = useParams();

  //used to check if a user's recipe list contains the recipe they are trying to edit
  const findRecipeById = function(recipeId, recipes) {
    const editRecipe = recipes.find(recipe => recipe.id === parseInt(recipeId));
    if (editRecipe) {
      return editRecipe;
    }
    return null;
  };

  //set the currentRecipe to the recipe with the id matching the url only if the user owns the recipe
  useEffect(() => {
    const getRecipe = async() => {
      const userId = await localStorage.getItem('userId');
      const userInfo = await getRecipesByUserId(userId);
      const userRecipes = userInfo.recipes;
      const ownedRecipe = findRecipeById(id, userRecipes);
      
      if (ownedRecipe) {
        const ingredients = await getIngredients(ownedRecipe.id);
        recipeSummaryView();
        setIngredients(ingredients);
      }
      setRecipe(ownedRecipe);
    };
    const fetchData = async () => {
      await getRecipe();
    };
    fetchData();
  }, [id]);
  
  //submit recipe and ingredients to the db
  const handleSubmit = function() {
    updateRecipe(currentRecipe.id, currentRecipe);
    currentIngredients.map(ingredient => {
      (ingredient.delete && deleteIngredient(ingredient.id));
      (!ingredient.delete && updateIngredient(ingredient.id, ingredient));
    });
    props.closePopup();
  };



  return (
    <>
      <main className='edit-recipe'>
        {recipeEditMode === 'SUMMARY' && <EditRecipeSummary />}
        {recipeEditMode === 'INGREDIENTS' && <EditRecipeIngredients />}
        {recipeEditMode === 'DIRECTIONS' && <EditRecipeDirections />}
      </main>
      {recipeEditMode === 'LOCKED' && <Link to={'/recipes'}><button>Back</button></Link>}
      
      {currentRecipe &&
        <div className='publish-button'>
          <button onClick={handleSubmit}>Publish</button>
        </div>
      }

    </>
  );
};

export default EditRecipe;
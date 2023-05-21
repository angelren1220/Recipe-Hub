import { createContext, useState } from "react";

export const recipeEditContext = createContext();


export default function RecipeEditModeProvider(props) {
  const [recipeEditMode, setRecipeEditMode] = useState('LOCKED');
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState([]);


  //functions to change viewMode

  const recipeLockedView = function() {
    setRecipeEditMode('LOCKED');
  };

  const recipeSummaryView = function() {
    setRecipeEditMode('SUMMARY');
  };

  const recipeIngredientsView = function() {
    setRecipeEditMode('INGREDIENTS');
  };

  const recipeDirectionsView = function() {
    setRecipeEditMode('DIRECTIONS');
  };

  //functions to change recipe

  const setRecipe = function(recipe) {
    setCurrentRecipe(recipe);
  };

  const setRecipeName = function(name) {
    setCurrentRecipe({ ...currentRecipe, name });
  };

  const setRecipeDescription = function(description) {
    setCurrentRecipe({ ...currentRecipe, description });
  };

  const setRecipeCooktime = function(cooktime) {
    setCurrentRecipe({ ...currentRecipe, cooktime_minutes: cooktime });
  };

  const setRecipeImage = function(image) {
    setCurrentRecipe({ ...currentRecipe, image });
  };
  //for a given flag with boolean value it will toggle the value, only if the flag already exists in the object
  const setRecipeFlag = function(flag, booleanValue) {
    setCurrentRecipe({ ...currentRecipe, [flag]: booleanValue });
  };

  const setRecipeDirection = function(index, direction) {
    let updatedDirections = currentRecipe.directions;
    updatedDirections[index] = direction;
    setCurrentRecipe({ ...currentRecipe, directions: updatedDirections });
  };

  const newRecipeDirection = function() {
    let updatedDirections = currentRecipe.directions;
    updatedDirections.push('');
    setCurrentRecipe({ ...currentRecipe, directions: updatedDirections });
  };

  //functions to change ingredients
  //updates ingredient in the currentIngredients state by matching id

  const setIngredients = function(ingredients) {
    setCurrentIngredients(ingredients);
  };

  const setIngredient = function(ingredient) {
    const ingredientIndex = currentIngredients.findIndex(i => i.id === ingredient.id);
    let updatedIngredients = currentIngredients;
    updatedIngredients[ingredientIndex] = ingredient;
    setCurrentIngredients(updatedIngredients);
  };

  const removeIngredient = function(ingredient) {
    const ingredientIndex = currentIngredients.findIndex(i => i.id === ingredient.id);
    let updatedIngredients = currentIngredients;
    updatedIngredients.splice(ingredientIndex, 1);
    setCurrentIngredients(updatedIngredients);
  };

  //export functions and states
  const providerData = {
    recipeEditMode,
    recipeLockedView,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView,
    currentRecipe,
    setRecipe,
    setRecipeName,
    setRecipeDescription,
    newRecipeDirection,
    setRecipeCooktime,
    setRecipeImage,
    setRecipeFlag,
    setRecipeDirection,
    currentIngredients,
    setIngredient,
    setIngredients,
    removeIngredient,
  };

  return (
    <recipeEditContext.Provider value={providerData}>
      {props.children}
    </recipeEditContext.Provider>
  );
};
import { createContext, useState } from "react";

export const recipeEditContext = createContext();

export default function RecipeEditModeProvider(props) {
  const [recipeEditMode, setRecipeEditMode] = useState('SUMMARY');

  //functions to change viewMode

  const recipeSummaryView = function() {
    setRecipeEditMode('SUMMARY');
  };

  const recipeIngredientsView = function() {
    setRecipeEditMode('INGREDIENTS');
  };

  const recipeDirectionsView = function() {
    setRecipeEditMode('DIRECTIONS');
  };

  const providerData = {
    recipeEditMode,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  };

  return (
    <recipeEditContext.Provider value={providerData}>
      {props.children}
    </recipeEditContext.Provider>
  );
};
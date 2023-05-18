import { createContext, useState } from "react";

export const recipeEditContext = createContext();

export default function recipeEditMode(props) {
  const [editRecipeMode, setEditRecipeMode] = useState('');

  //functions to change viewMode

  const recipeSummaryView = function() {
    setEditRecipeMode('SUMMARY');
  };

  const recipeIngredientsView = function() {
    setEditRecipeMode('INGREDIENTS');
  };

  const recipeDirectionsView = function() {
    setEditRecipeMode('DIRECTIONS');
  };

  const providerData = {
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  };

  return (
    <viewModeContext.Provider value={providerData}>
      {props.children}
    </viewModeContext.Provider>
  );
};
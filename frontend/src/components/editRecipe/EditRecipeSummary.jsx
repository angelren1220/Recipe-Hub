import { useState, useContext, useEffect } from "react";
import { viewModeContext } from "../../hooks/providers/viewModeProvider";

import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const EditRecipeSummary = function(props) {

  const {
    recipeIngredientsView,
    currentRecipe,
    setRecipeName,
    setRecipeDescription,
    setRecipeCooktime,
    setRecipeImage,
    setRecipeFlagOpposite,
  } = useContext(recipeEditContext);

  const handleEdit = function() {
    console.log('🦁', currentRecipe);
    recipeIngredientsView();
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="name" >Recipe Title:</label>
        <input
          id="name"
          value={currentRecipe.name}
          onChange={(e) => setRecipeName(e.target.value)}
          name="name"
          type="text"
          placeholder={currentRecipe.name}
          required
        />
        <label htmlFor="description" >Description:</label>
        <input
          id="description"
          value={currentRecipe.description}
          onChange={(e) => setRecipeDescription(e.target.value)}
          name="description"
          type="text"
          placeholder={currentRecipe.description}
          required
        />
        <label htmlFor="cooktime_minutes" >Cooktime in minutes:</label>
        <input
          id="cooktime_minutes"
          value={currentRecipe.cooktime_minutes}
          onChange={(e) => setRecipeCooktime(e.target.value)}
          name="cooktime_minutes"
          type="integer"
          placeholder={currentRecipe.cooktime_minutes}
        />
        <label htmlFor="image" >Image:</label>
        <input
          id="image"
          value={currentRecipe.image}
          onChange={(e) => setRecipeImage(e.target.value)}
          name="image"
          type="url"
          placeholder={currentRecipe.image}
        />
        <label htmlFor="is_vegetarian">Vegetarian:</label>
        <input 
          id="is_vegetarian"
          value={currentRecipe.is_vegetarian}
          onChange={(e) => {
            console.log('AAAAAAA', e.target.checked)
            setRecipeFlagOpposite('is_vegetarian', e.target.checked);
          }}
          name="is_vegetarian"
          type="checkbox"
        />
        <button onClick={handleEdit}>Edit Ingredients</button>
      </form>
      <button >To Ingredients</button>
    </>
  );
};

export default EditRecipeSummary;
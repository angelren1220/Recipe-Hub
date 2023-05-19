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
    //for for recipe title, description, cooktime, and image url
    <>
      <h1>Edit Recipe Summary</h1>
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
      </form>

      //form for boolean tags only
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
        className="toggle"
      >
        <label htmlFor="is_vegetarian">Vegetarian:</label>
        <input 
          id="is_vegetarian"
          value={currentRecipe.is_vegetarian}
          onChange={(e) => {
            setRecipeFlagOpposite('is_vegetarian', e.target.checked);
          }}
          name="is_vegetarian"
          type="checkbox"
          checked={(currentRecipe.is_vegetarian ? "checked" : false)}
        />
        <label htmlFor="is_vegan">Vegan:</label>
        <input 
          id="is_vegan"
          value={currentRecipe.is_vegan}
          onChange={(e) => {
            setRecipeFlagOpposite('is_vegan', e.target.checked);
          }}
          name="is_vegan"
          type="checkbox"
          checked={(currentRecipe.is_vegan ? "checked" : false)}
        />
        <label htmlFor="is_lowcarb">Low Carb:</label>
        <input 
          id="is_lowcarb"
          value={currentRecipe.is_lowcarb}
          onChange={(e) => {
            setRecipeFlagOpposite('is_lowcarb', e.target.checked);
          }}
          name="is_lowcarb"
          type="checkbox"
          checked={(currentRecipe.is_lowcarb ? "checked" : false)}
        />
        <label htmlFor="is_lactosefree">Low Carb:</label>
        <input 
          id="is_lactosefree"
          value={currentRecipe.is_lactosefree}
          onChange={(e) => {
            setRecipeFlagOpposite('is_lactosefree', e.target.checked);
          }}
          name="is_lactosefree"
          type="checkbox"
          checked={(currentRecipe.is_lactosefree ? "checked" : false)}
        />
        <label htmlFor="is_glutenfree">Low Carb:</label>
        <input 
          id="is_glutenfree"
          value={currentRecipe.is_glutenfree}
          onChange={(e) => {
            setRecipeFlagOpposite('is_glutenfree', e.target.checked);
          }}
          name="is_glutenfree"
          type="checkbox"
          checked={(currentRecipe.is_glutenfree ? "checked" : false)}
        />
        <label htmlFor="is_nutfree">Low Carb:</label>
        <input 
          id="is_nutfree"
          value={currentRecipe.is_nutfree}
          onChange={(e) => {
            setRecipeFlagOpposite('is_nutfree', e.target.checked);
          }}
          name="is_nutfree"
          type="checkbox"
          checked={(currentRecipe.is_nutfree ? "checked" : false)}
        />
      </form>
      <button >To Ingredients</button>
    </>
  );
};

export default EditRecipeSummary;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Recipe from "./Recipe";

const RecipeList = function(props) {
 
  const recipeList = props.recipes.map((recipe) => {
    
    return (<Recipe
      key={recipe.id}
      name={recipe.name}
      directions={recipe.directions}
      cooktime={recipe.cooktime_minutes}
      is_vegetarian={recipe.is_vegetarian}
      is_vegans_lowcarb={recipe.is_vegans_lowcarb}
      is_lactosefree={recipe.is_lactosefree}
      is_glutenfree={recipe.is_glutenfree}
      is_nutfree={recipe.is_nutfree}
      image={recipe.image}
      ingredients={()=> props.getIngredients}
    />);
  });


  return (
    <>
      {recipeList}
    </>
  );
};

export default RecipeList;
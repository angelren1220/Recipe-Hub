/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Recipe from "./Recipe";

const RecipeList = function(props) {
 
  const recipeList = props.recipes.map((recipe) => {
    
    return (<Recipe
      key={recipe.id}
      {...recipe}
    />);
  });


  return (
    <>
      {recipeList}
    </>
  );
};

export default RecipeList;
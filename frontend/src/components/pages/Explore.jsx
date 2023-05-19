import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import Recipe from "../Recipe";

const Explore = function(props) {

  const {
    state,
    dispatch,
    getAllRecipes
  } = useApplicationData();

  useEffect(() => {
    getAllRecipes();
  }, []);

  console.log(state.recipes)

  const recipeList = state.recipes.map((recipe) => {
    return (<Recipe
      key={recipe.id}
      {...recipe}
    />);
  });

  return (
    <article className="explore">
      <h1>ALL Recipes go here</h1>
      {recipeList}
    </article>
  );
};

export default Explore;
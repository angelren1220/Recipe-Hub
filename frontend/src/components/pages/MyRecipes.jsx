import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";

import RecipeList from "../RecipeList";

const MyRecipes = function(props) {

  const {
    state,
    dispatch,
    getRecipesByUserId
  } = useApplicationData();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getRecipesByUserId(userId);
  }, []);

  return (
    <article className="my-recipes">
      <h1>My Recipes</h1>
      <RecipeList
        recipes={state.recipes}
      />
    </article>
  );
};

export default MyRecipes;
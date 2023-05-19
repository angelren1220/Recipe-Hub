import React, { useEffect, useState } from "react";
import RecipeAccordion from "../RecipeAccordion";
import useApplicationData from "../../hooks/useApplicationData";

const RecipesList = function(props) {
  
  const {
    state,
    dispatch,
    getRecipesByUserID
  } = useApplicationData();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getRecipesByUserID(userId);
  }, []);

  return (
    <article className="recipes-list">
      <h1>A template to show recipes here</h1>
      <RecipeAccordion recipes={state.recipes}/>
    </article>
  );
};

export default RecipesList;
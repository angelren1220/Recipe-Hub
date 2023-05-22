import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import RecipeAccordion from "../RecipeAccordion";

const Explore = function(props) {

  const {
    state,
    getAllRecipes,
  } = useApplicationData();

  useEffect(() => {

      getAllRecipes();

  }, []);

  return (
    <article className="explore">
      <h1>ALL Recipes go here</h1>
      <RecipeAccordion recipes={state.recipes}/>
    </article>
  );
};

export default Explore;
import React, { useEffect, useState } from "react";
import RecipeAccordion from "../RecipeAccordion";

const RecipesList = function(props) {  

  return (
    <article className="recipes-list">
      <h1>A template to show recipes here</h1>
      <RecipeAccordion />
    </article>
  );
};

export default RecipesList;
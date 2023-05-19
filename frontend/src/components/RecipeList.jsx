/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import RecipeAccordion from "./RecipeAccordion";
import Recipe from "./Recipe";
import useApplicationData from "../hooks/useApplicationData";

const RecipeList = function(props) {

  return (
    <article className="recipes-list">
      <h1>A template to show recipes here</h1>
       <RecipeAccordion />
    </article>
  );
};

export default RecipeList;
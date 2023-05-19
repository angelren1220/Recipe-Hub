import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import RecipeAccordion from "../RecipeAccordion";

const Explore = function(props) {

  return (
    <article className="explore">
      <h1>ALL Recipes go here</h1>
      <RecipeAccordion />
    </article>
  );
};

export default Explore;
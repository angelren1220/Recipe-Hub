import React, { useEffect, useState } from "react";
import CreateRecipe from "../CreateRecipe";

const NewRecipe = function(props) {

  const userId = localStorage.getItem('userId');

  return (
    <article className="new-recipe">
      <CreateRecipe userId={userId}/>
    </article>
  );
};

export default NewRecipe;
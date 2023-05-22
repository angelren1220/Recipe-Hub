import React, {useEffect} from "react";
import RecipeAccordion from "../RecipeAccordion";
import Loop from "../LoopScroll";
import useApplicationData from "../../hooks/useApplicationData";

const RecipesList = function(props) {

  const {
    state,
    getRecipesByUserId,
    getAllRecipes,
  } = useApplicationData();

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    if (userId){
      getRecipesByUserId(userId);
    } else {
      getAllRecipes();
    }
  }, []);

  return (
    <article className="recipes-list">
      <h1>A template to show recipes here</h1>
      <RecipeAccordion recipes={state.recipes} userId={userId}/>
    </article>
  );
};

export default RecipesList;
import React, {useEffect} from "react";
import RecipeAccordion from "../RecipeAccordion";
import Loop from "../LoopScroll";
import useApplicationData from "../../hooks/useApplicationData";
import { Link } from "react-router-dom";

const RecipesList = function(props) {

  const {
    state,
    getRecipesByUserId,
    getAllRecipes,
  } = useApplicationData();

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    if (userId) {
      getRecipesByUserId(userId);
    } else {
      getAllRecipes();
    }
  }, []);

  return (
    <article className="recipes-list">
      {userId ? <h1>User Recipes</h1> : <h1>All Recipes</h1>}
      {userId && <Link to={'/recipes/new'}><button>Create a Recipe</button></Link>}
      <RecipeAccordion recipes={state.recipes} userId={userId}/>
    </article>
  );
};

export default RecipesList;
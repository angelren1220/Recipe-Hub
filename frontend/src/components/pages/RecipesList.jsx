import React, { useEffect, useState } from "react";
import RecipeAccordion from "../RecipeAccordion";
import Loop from "../LoopScroll";
import useApplicationData from "../../hooks/useApplicationData";
import { Link } from "react-router-dom";

import Popup from "../Popup";
import NewRecipe from "./NewRecipe";
import CreateRecipe from "../CreateRecipe";

const RecipesList = function(props) {

  const {
    state,
    getRecipesByUserId,
    getUserById,
    getAllRecipes,
  } = useApplicationData();

  const userId = localStorage.getItem('userId');

  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const getUserData = async function() {
      getRecipesByUserId(userId);
      const user = await getUserById(userId);
      setUserState(user);
    };

    if (userId) {
      getUserData();
    } else {
      getAllRecipes();
    }
  }, []);
  return (
    <article className="recipes-list">
      {!userState && <h1>All Recipes</h1>}
      {userState && (
        <Popup popupMessage="Create a Recipe">
          <NewRecipe/>
        </Popup>
      )}
      <RecipeAccordion recipes={state.recipes} userId={userId} />
    </article>
  );
};

export default RecipesList;
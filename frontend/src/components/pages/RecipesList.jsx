import React, { useEffect, useState } from "react";
import RecipeAccordion from "../RecipeAccordion";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from "react-router-dom";

import Popup from "../Popup";
import NewRecipe from "./NewRecipe";

const RecipesList = function(props) {

  const {
    state,
    getRecipesByUserId,
    getUserById,
    getAllRecipes,
    deleteRecipe,
    createMessage,
    addRecipe
  } = useApplicationData();

  const userId = localStorage.getItem('userId');

  const [userState, setUserState] = useState(null);

  const { id } = useParams();

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
      <h1 className="recipe-title">{userId && 'My Recipes' }</h1>
      {!userState && <h1>All Recipes</h1>}
      {userState && (
        <Popup popupMessage="Create a Recipe">
          <NewRecipe />
        </Popup>
      )}
      <RecipeAccordion
        recipes={state.recipes}
        userId={userId}
        userBooks={state.books}
        deleteRecipe={deleteRecipe}
        createMessage={createMessage}
        addRecipe={addRecipe}
      />
    </article>
  );
};

export default RecipesList;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from 'react-router-dom';
import SystemMessage from "../SystemMessage";
import Popup from "../Popup";
import RecipeEditModeProvider from "../../hooks/providers/recipeEditMode";
import EditRecipe from "./EditRecipe";
import UserInfo from "../UserInfo";

const Recipe = function(props) {
  const { id } = useParams();
  const userId = localStorage.getItem('userId');
  // console.log(id);

  const {
    state,
    getRecipeById,
    getIngredients,
    deleteRecipe,
    createGrocerylist
  } = useApplicationData();

  const [isItemSaved, setIsItemSaved] = useState(false);

  useEffect(() => {
    getRecipeById(id);
    getIngredients(id);

  }, [isItemSaved]);

  const { recipe, ingredients, user } = state;

  const handleDelete = (id) => {
    deleteRecipe(id);
    window.location = "/recipes";
  };

  const handleAddGrocerylist = () => {
    const items = {};
    ingredients.map((ingredient) => {
      items[ingredient.name] = { quantity: ingredient.quantity, units: ingredient.units };
    });

    const grocerylist = { name: recipe.name, user_id: userId, items: items };

    createGrocerylist(grocerylist);
    setIsItemSaved(true);
  };

  const handleShowMessage = () => {
    setIsItemSaved(false);
  };

  if (!recipe || !recipe.directions) {
    return <div>Loading...</div>;
  }

  return (
    <article className="recipe">

      <div className="recipe-text">
        <h2 className="recipe-title">{recipe.name}</h2>
        <p className="author"><UserInfo userId={user.id} /></p>
        <h3 className="subtitle">Description</h3>
        <p>{recipe.description}</p>
        <h3 className="subtitle">Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, i) => (<li key={i}>{ingredient.name}: {ingredient.quantity} {ingredient.units}</li>))}
        </ul>
        <ul>

          {userId && <div className="control-buttons">
            <SystemMessage
              show={isItemSaved}
              message={"Added to grocery list successfully"}
              type="success"
              onShowMessage={handleShowMessage} />
            <button onClick={(event) => handleAddGrocerylist()}>Add to Grocery Lists</button>
          </div>}

          <li>Estimate cooktime: {recipe.cooktime_minutes} min</li>
          {recipe.is_vegetarian && <li>Vegetarian</li>}
          {recipe.is_vegan && <li>Vegan</li>}
          {recipe.is_lowcarb && <li>Low Carb</li>}
          {recipe.is_lactosefree && <li>Lactose Free</li>}
          {recipe.is_glutenfree && <li>Gluten Free</li>}
          {recipe.is_nutfree && <li>Nut Free</li>}
        </ul>
        <h3 className="subtitle">Directions</h3>
        <ol>
          {recipe.directions.map((direction, i) => (<li key={i}> {direction} </li>))}
        </ol>

        {parseInt(userId) === recipe.user_id && <div className="control-buttons">
          <Popup popupMessage={"Delete Recipe"}>
            <button onClick={(event) => handleDelete(recipe.id)}>Confirm Delete</button>
          </Popup>
          <RecipeEditModeProvider>
            <Popup popupMessage="Edit Recipe">
              <EditRecipe />
            </Popup>
          </RecipeEditModeProvider>
        </div>}
      </div>

      <img src={recipe.image} alt={recipe.name} className="recipe-img" />
    </article>
  );

};

export default Recipe;
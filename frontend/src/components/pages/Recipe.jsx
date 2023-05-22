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
        <div className="byline">
          <span>By:</span>
          <span className="author"> <UserInfo userId={user.id} /> </span>
        </div>
        <p>Estimate cooktime: {recipe.cooktime_minutes} min</p>
        <div className="categories">
          <div className="tags">
            {recipe.is_vegan && <span className="category">Vegan</span>}
            {recipe.is_vegetarian && <span className="category">Vegetarian</span>}
            {recipe.is_nutfree && <span className="category">Nut-free</span>}
            {recipe.is_lowcarb && <span className="category">Low-Carb</span>}
            {recipe.is_glutenfree && <span className="category">Gluten-free</span>}
            {recipe.is_lactosefree && <span className="category">Lactose-free</span>}
          </div>
        </div>
        <h3 className="subtitle description-title">Description</h3>
        <p className="description">{recipe.description}</p>
        <h3 className="subtitle">Ingredients</h3>

        <ul>
          {ingredients.map((ingredient, i) => (<li key={i}>{ingredient.name}: {ingredient.quantity} {ingredient.units}</li>))}
        </ul>
        {userId && <div className="control-buttons make-grocery-list">
          <SystemMessage
            show={isItemSaved}
            message={"Added to grocery list successfully"}
            type="success"
            onShowMessage={handleShowMessage} />
          <button onClick={(event) => handleAddGrocerylist()}>Add to Grocery Lists</button>
        </div>}

        <h3 className="subtitle">Directions</h3>
        <ol>
          {recipe.directions.map((direction, i) => (<li key={i}> {direction} </li>))}
        </ol>

        {parseInt(userId) === recipe.user_id && <div className="control-buttons, recipe-footer">
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
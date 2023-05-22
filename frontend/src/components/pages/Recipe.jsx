import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    getRecipeById(id);
    getIngredients(id);
  }, []);

  const { recipe, ingredients } = state;

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

    console.log(items);
    console.log(grocerylist);
    console.log(ingredients.length, Object.keys(items).length);
    createGrocerylist(grocerylist);


  };

  if (!recipe || !recipe.directions) {
    return <div>Loading...</div>;
  }

  return (
    <article className="recipe">

      <div className="recipe-text">
        <h2 className="recipe-title">{recipe.name}</h2>
        <span>description</span>
        <p>{recipe.description}</p>
        <span>ingredients</span>
        <ul>
          {ingredients.map((ingredient, i) => (<li key={i}>{ingredient.name}: {ingredient.quantity} {ingredient.units}</li>))}
        </ul>
        <ul>

          {userId && <div className="control-buttons">
            <button onClick={(event) => handleAddGrocerylist()}>Add to Grocery Lists</button>
          </div>}

          <li>Estimate cooktime: {recipe.cooktime_minutes} min</li>
          {recipe.is_vegetarian && <li>Vegetarian</li>}
          {recipe.is_vegan && <li>Vegan</li>}
          {recipe.is_vegans_lowcarb && <li>Low Carb</li>}
          {recipe.is_lactosefree && <li>Lactose Free</li>}
          {recipe.is_glutenfree && <li>Gluten Free</li>}
          {recipe.is_nutfree && <li>Nut Free</li>}
        </ul>
        <span>directions</span>
        <ol>
          {recipe.directions.map((direction, i) => (<li key={i}> {direction} </li>))}
        </ol>

        {userId && <div className="control-buttons">
          <button onClick={(event) => handleDelete(recipe.id)}>Delete Recipe</button>
          <Link to={`/edit/${recipe.id}`}>
            <button>Edit Recipe</button>
          </Link>
        </div>}
      </div>

      <img src={recipe.image} alt={recipe.name} className="recipe-img" />
    </article>
  );

};

export default Recipe;
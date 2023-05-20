import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/recipe_accordion.scss";
import useApplicationData from "../hooks/useApplicationData";


const RecipeAccordion = function(props) {

  const {
    state,
    dispatch,
    getRecipesByUserID,
    getAllRecipes,
    deleteRecipe
  } = useApplicationData();

  const [selected, setSelected] = useState([]);

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    if (userId){
      getRecipesByUserID(userId);
    } else {
      getAllRecipes();
    }
  }, []);

  const toggle = (i, event) => {
    event.stopPropagation();
    const selectedRecipeId = state.recipes[i].id;
    if (selected.includes(selectedRecipeId)) {
      setSelected(selected.filter((id) => id !== selectedRecipeId));
    } else {
      setSelected([...selected, selectedRecipeId]);
    }
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    deleteRecipe(id);
  };

  return (
    <article className="recipe-accordions-wrapper">

      {/* Looping through recipes sent from RecipesList, passed down from App component */}
      {state.recipes.map((item, i) => (
        <div className={selected.some(index => index === i) ? 'recipe-accordion selected' : 'recipe-accordion'} key={i} onClick={(event) => toggle(i, event)}>
          
          <div className="banner">
            <Link to={`/recipes/${item.id}`}>
    
              <h1>{item.name}</h1>
  
            </Link>
            <h2>By: {item.first_name}</h2>
          

            <div className="banner-right">
              <h2 className="toggle">{selected.includes(i) ? '-' : '+'}</h2>
              <img className="banner-image" src={item.image} />
            </div>

          </div>

          <div className={selected.includes(item.id) ? 'content show' : 'content'}>

            <h2>Cooktime: {item.cooktime_minutes} min</h2>
            <h2>Description: <p>{item.description}</p></h2>
            
            <div className="categories">
              <h2>Categories:</h2>
              {item.is_vegan && <span className="category">Vegan</span>}
              {item.is_vegetarian && <span className="category">Vegetarian</span>}
              {item.is_nutfree && <span className="category">Nut-free</span>}
              {item.is_lowcarb && <span className="category">Nut-free</span>}
              {item.is_glutenfree && <span className="category">Nut-free</span>}
              {item.is_nutfree && <span className="category">Nut-free</span>}
            </div>

            {userId &&<div className="control-buttons">
              <button onClick={(event) => handleDelete(item.id, event)}>Delete Recipe</button>
              <Link to={`/edit/${item.id}`}>
                <button>Edit Recipe</button>
              </Link>
            </div>}

          </div>

        </div>
      ))}
    </article>
  );
};

export default RecipeAccordion;

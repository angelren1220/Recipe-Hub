import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/recipe_accordion.scss";
import useApplicationData from "../hooks/useApplicationData";

const RecipeAccordion = function(props) {

  const {
    state,
    dispatch,
    getRecipesByUserID,
    deleteRecipe
  } = useApplicationData();

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getRecipesByUserID(userId);
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

  console.log(props.recipes)

  return (
    <article className="recipe-accordions-wrapper">

      {/* Looping through recipes sent from RecipesList, passed down from App component */}
      {state.recipes.map((item, i) => (
        <div className={selected.some(index => index === i) ? 'recipe-accordion selected' : 'recipe-accordion'} key={i} onClick={(event) => toggle(i, event)}>
          
          <div className="banner">
            <Link to={`/recipes/${item.id}`}>
              <h1>{item.name}</h1>
            </Link>
            <div className="banner-right">
              <h2>By: {item.first_name}</h2>
              <h2 className="toggle">{selected.includes(i) ? '-' : '+'}</h2>
              <img className="banner-image" src={item.image} />
            </div>
          </div>

          <div className={selected.includes(item.id) ? 'content show' : 'content'}>
            <h2>Cooktime: {item.cooktime_minutes} min</h2>
            <h2>Description: {item.description}</h2>

            <div className="control-buttons">
              <button onClick={(event) => handleDelete(item.id, event)}>Delete Recipe</button>
              <Link to={`/edit/${item.id}`}>
                <button>Edit Recipe</button>
              </Link>
            </div>
          </div>

        </div>
      ))}
    </article>
  );
};

export default RecipeAccordion;

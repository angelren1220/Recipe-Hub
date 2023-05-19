import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/recipe_accordion.scss";

const RecipeAccordion = function(props) {

  const [selected, setSelected] = useState([]);

  const toggle = (i, event) => {
    event.stopPropagation();
    if (selected.includes(i)) {
      setSelected(selected.filter(item => item !== i));
    } else {
      setSelected([...selected, i]);
    }
  };

  console.log(props.recipes)

  return (
    <article className="recipe-accordions-wrapper">

      {/* Looping through recipes sent from RecipesList, passed down from App component */}
      {props.recipes.map((item, i) => (
        <div className={selected.some(index => index === i) ? 'recipe-accordion selected' : 'recipe-accordion'} key={i} onClick={(event) => toggle(i, event)}>
          
          <div className="banner">
            <Link to={`/recipes/${item.id}`}>
              <h1>{item.name}</h1>
            </Link>
            <div className="banner-right">
              <h2>Cooktime: {item.cooktime_minutes}</h2>
              <h2 className="toggle">{selected.includes(i) ? '-' : '+'}</h2>
              <img className="banner-image" src={item.image} />
            </div>
          </div>

          <div className={selected.some(index => index === i) ? 'content show' : 'content'}>
            <h2>By: {item.author}</h2>
            <h2>Description: {item.details}</h2>
          </div>

        </div>
      ))}
    </article>
  );
};

export default RecipeAccordion;

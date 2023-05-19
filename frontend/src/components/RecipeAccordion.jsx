import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/recipe_accordion.scss";

const RecipeAccordion = function(props) {
  const fakeData = [
    {
      id: 1,
      title: "Recipe A",
      cooktime: '30 min',
      author: "Some Guy",
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nihil ab doloremque nemo aspernatur labore sunt sequi expedita odit magni, repellat praesentium eaque nobis voluptates, beatae architecto sint harum alias.",
      imageURL: 'https://creativereview.imgix.net/content/uploads/2020/06/Julia-Dufosse-jello-CR.jpg?auto=compress,format&q=60&w=1200&h='
    },
    {
      id: 2,
      title: "Recipe B",
      cooktime: '40 min',
      author: "Another Person",
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nihil ab doloremque nemo aspernatur labore sunt sequi expedita odit magni, repellat praesentium eaque nobis voluptates, beatae architecto sint harum alias.",
      imageURL: 'https://admin.itsnicethat.com/images/WNRFeellTcbJah-Y2XtFyzv6gio=/199101/format-webp%7Cwidth-1440/julia-dufosse-illustration-itsnicethat-01.jpg'
    }
  ];

  const [selected, setSelected] = useState([]);

  const toggle = (i, event) => {
    event.stopPropagation();
    if (selected.includes(i)) {
      setSelected(selected.filter(item => item !== i));
    } else {
      setSelected([...selected, i]);
    }
  };

  return (
    <article className="recipe-accordions-wrapper">
      {fakeData.map((item, i) => (
        <div className={selected.some(index => index === i) ? 'recipe-accordion selected' : 'recipe-accordion'} key={i} onClick={(event) => toggle(i, event)}>
          
          <div className="banner">
            <Link to={`/recipes/${item.id}`}>
              <h1>{item.title}</h1>
            </Link>
            <div className="banner-right">
              <h2>Cooktime: {item.cooktime}</h2>
              <h2 className="toggle">{selected.includes(i) ? '-' : '+'}</h2>
              <img className="banner-image" src={item.imageURL} />
            </div>
          </div>

          <div className={selected.some(index => index === i) ? 'content show' : 'content'}>
            <h2>By: {item.author}</h2>
            <p>Description: {item.details}</p>
          </div>

        </div>
      ))}
    </article>
  );
};

export default RecipeAccordion;

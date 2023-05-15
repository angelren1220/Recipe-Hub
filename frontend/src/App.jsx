import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Recipe from './components/Recipe';

import useApplicationData from './hooks/useApplicationData';


const App = function() {

  const {
    state,
    dispatch
  } = useApplicationData();

  const recipeList = state.recipes.map((recipe) => {
    return (<Recipe
      key={recipe.id}
      name={recipe.name}
      direnctions={recipe.direnctions}
      cooktime={recipe.cooktime_minutes}
    />);
    });

  return (

    <div className="App">

      <Navigation />

      <main className="recipes">

        {recipeList}

      </main>
    </div>
  );

};

export default App;

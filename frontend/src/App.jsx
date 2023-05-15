import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';


import useApplicationData from './hooks/useApplicationData';


const App = function(props) {

  const {
    state,
    dispatch
  } = useApplicationData();

  const viewMode = 'recipes';

  return (

    <div className="App">

      <Navigation />

      <main className="recipes">

        {viewMode === 'recipes' && <RecipeList recipes={state.recipes}/>}
        {viewMode === 'login' && <Login />}
        {viewMode === 'register' && <Register />}
        {viewMode === 'loading' && <Loading >Loading</Loading>}

      </main>
      <footer>
        <button>Log In</button >
        <button>Register</button >
      </footer>
    </div>
  );

};

export default App;

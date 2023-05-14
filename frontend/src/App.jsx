import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import Register from './components/Register';

const App = function() {

  const [viewMode, setViewMode] = useState('recipes')

  return (
    <div className="App">

      <Navigation />

      <main className="recipes">

        {viewMode === 'recipes' && <RecipeList />}
        {viewMode === 'login' && <Login />}
        {viewMode === 'register' && <Register />}

      </main>
    </div>
  );
};

export default App;

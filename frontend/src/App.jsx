import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Recipe from './components/Recipe';
import Login from './components/Login';
import Register from './components/Register';

const App = function() {

  return (
    <div className="App">

      <Navigation />

      <main className="recipes">

        <Login />

      </main>
    </div>
  );
};

export default App;

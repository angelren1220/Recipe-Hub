import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Recipe from './components/Recipe';

const App = function() {

  return (
    <div className="App">

      <Navigation />

      <main className="recipes">

        <Recipe />
        <Recipe />
        <Recipe />

      </main>
    </div>
  );
};

export default App;

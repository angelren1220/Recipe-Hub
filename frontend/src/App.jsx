import './App.css';

import Navigation from './components/Navigation';

const App = function() {

  return (
    <div className="App">

      <Navigation />

      <main className="recipes">

        <div className="recipe">
          <h1>Potato Gnocchi</h1>

          <h3>Ingredients</h3>
          <ul>
            <li>2lbs Potatoes</li>
            <li>1 egg</li>
            <li>1.5 cups flour</li>
            <li>2 tsp salt</li>
          </ul>

          <h3>Directions</h3>
          <ol>
            <li>Boil the potatoes with the skins on</li>
            <li>Peel the potatoes</li>
            <li>Rice or mash the potatoes</li>
            <li>Gently combine all ingredients into a dough</li>
            <li>Shape the dough into bite size pastas</li>
            <li>Boil the pasta until it floats to the surface</li>
          </ol>
        </div>

      </main>
    </div>
  );
};

export default App;

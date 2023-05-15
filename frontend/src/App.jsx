import { useContext } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';


import useApplicationData from './hooks/useApplicationData';
import { viewModeContext } from './hooks/providers/viewModeProvider.jsx';


const App = function() {

  const { viewMode, loginView, registerView, recipesView, loadingView } = useContext(viewModeContext);

  const {
    state,
    dispatch,
    getIngredients
  } = useApplicationData();

  return (

    <div className="App">

      <Navigation />

      <main className="recipes">

        {viewMode === 'recipes' &&
          <RecipeList
            recipes={state.recipes}
            getIngredients={() => getIngredients()}
          />}
        {viewMode === 'login' && <Login />}
        {viewMode === 'register' && <Register />}
        {viewMode === 'loading' && <Loading >Loading</Loading>}
      </main>
      
      <footer>
        <button onClick={loginView}>Log In</button >
        <button onClick={registerView}>Register</button >
        <button onClick={recipesView}>Recipes</button >
        <button onClick={loadingView}>Loading...</button >
      </footer>

    </div>
  );

};

export default App;

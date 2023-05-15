import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

{/*Page Components*/}
import MyRecipes from './components/pages/MyRecipes';
import Explore from './components/pages/Explore';
import Search from './components/pages/Search';
import GroceryLists from './components/pages/GroceryLists';
import Profile from './components/pages/Profile';
import Inbox from './components/pages/Inbox';


import Navigation from './components/Navigation';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';


import useApplicationData from './hooks/useApplicationData';
import { viewModeContext } from './hooks/providers/viewModeProvider.jsx';
import CreateRecipe from './components/CreateRecipe';

const App = function() {

  const { viewMode, loginView, registerView, recipesView, loadingView } = useContext(viewModeContext);

  const {
    state,
    dispatch,
    getRecipesByUserID
  } = useApplicationData();

  useEffect(() => {
    getRecipesByUserID(1);
    // console.log("🐹", props.id);
  }, []);

  return (

    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path='/' element={<MyRecipes />}/>
          <Route path='/new/recipe' element={<CreateRecipe />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/grocerylists' element={<GroceryLists />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/inbox' element={<Inbox />}/>
        </Routes>
      
      </Router>

      <main className="recipes">

        {viewMode === 'recipes' &&
          <RecipeList
            recipes={state.recipes}
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

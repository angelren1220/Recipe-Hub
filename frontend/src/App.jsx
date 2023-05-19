import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

{/*Page Components*/ }

import Login from './components/pages/Login';
import Register from './components/pages/Register';

import RecipesList from './components/pages/RecipesList';
import Recipe from './components/pages/Recipe';
import NewRecipe from './components/pages/NewRecipe';
import EditRecipe from './components/pages/EditRecipe';

import Books from './components/pages/Books';
import NewBook from './components/pages/NewBook';

import Explore from './components/pages/Explore';
import Search from './components/pages/Search';

import GroceryLists from './components/pages/GroceryLists';
import GroceryList from './components/pages/GroceryList';
import GroceryListForm from './components/pages/GroceryListForm';

import Profile from './components/pages/Profile';

import Inbox from './components/pages/Inbox';

{/*Single Components*/}
import Template from './components/Template';
import useApplicationData from './hooks/useApplicationData';

const App = function() {

  const {
    state,
    dispatch,
    getRecipesByUserID
  } = useApplicationData();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getRecipesByUserID(userId);
    // console.log("🐹", props.id);
  }, []);

  return (

    <div className="App">
      <Router>
        <Template>

          <Routes>

            <Route path='/recipes'>
              <Route index element={<RecipesList/>}/>
              <Route path=':id' element={<Recipe/>}/>
              <Route path='new' element={<NewRecipe/>}/>
              <Route path='edit/:id' element={<EditRecipe/>}/>
            </Route>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/explore' element={<Explore/>}/>
            <Route path='/search' element={<Search/>}/>

            <Route path='/books'>
              <Route index element={<Books/>}/>
              <Route path=':id' element={<RecipesList/>}/>
              <Route path='new' element={<NewBook/>}/>
            </Route>

            <Route path='/grocerylists'>
              <Route index element={<GroceryLists/>}/>
              <Route path=':id' element={<GroceryList/>}/>
              <Route path='new' element={<GroceryListForm />}/>
            </Route>
            
            <Route path='/profile'>
              <Route index element={<Profile/>}/>
              <Route path=':id' element={<Profile/>}/>
            </Route>

            <Route path='/inbox'>
              <Route index element={<Inbox/>}/>
            </Route>

          </Routes>

        </Template>
      </Router>

    </div>
  );

};

export default App;

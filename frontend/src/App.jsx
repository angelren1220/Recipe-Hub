import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import Register from './components/Register';

import useApplicationData from './hooks/useApplicationData';


const App = function() {
  
  const {
    state,
    dispatch
  } = useApplicationData();
  
//   const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
//   ));

  const [viewMode, setViewMode] = useState('recipes')

  return (
    
    <div className="App">
    
  // <h1> Users </h1>

  // <ul> {userList} </ul>

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

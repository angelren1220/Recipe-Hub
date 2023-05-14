import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';


import useApplicationData from './hooks/useApplicationData';


const App = function() {

  const {
    state,
    dispatch
  } = useApplicationData();

  //   const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  //   ));

  const viewMode = 'recipes';

  return (

    <div className="App">

      {/* // <h1> Users </h1>

  // <ul> {userList} </ul> */}

      <Navigation />

      <main className="recipes">

        {viewMode === 'recipes' && <RecipeList />}
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

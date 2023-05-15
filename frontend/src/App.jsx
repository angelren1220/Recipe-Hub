import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Recipe from './components/Recipe';

import useApplicationData from './hooks/useApplicationData';


const App = function() {
  
  const {
    state,
    dispatch
  } = useApplicationData();
  
//   const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
//   ));

  return (
    
    <div className="App">
    
  // <h1> Users </h1>

  // <ul> {userList} </ul>

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

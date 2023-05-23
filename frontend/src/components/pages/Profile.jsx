import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import "../../styles/profile.scss"; 
const Profile = function(props) {

  const {
    state,
    getUserById
  } = useApplicationData();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    getUserById(userId);
  }, []);

  const { user, books, recipes, grocerylists } = state;

  return (
    <article className="profile">
      <h1>Display User Information Here</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Books #</th>
            <th>Recipes #</th>
            <th>Grocery Lists #</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{books.length}</td>
            <td>{recipes.length}</td>
            <td>{grocerylists.length}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default Profile;

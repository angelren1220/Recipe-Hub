import React, { useEffect, useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import "../../styles/profile.scss";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const UserProfile = function(props) {
  const { id } = useParams();
  // console.log(id);
  const {
    state,
    getUserById
  } = useApplicationData();

  useEffect(() => {
    getUserById(id);
  }, []);

  const { user, books, recipes } = state;

  return (
    <article className="profile">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>
                <Link to={`/books/${book.id}`}>
                  {book.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Recipes</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>
                <Link to={`/recipes/${recipe.id}`}>
                  {recipe.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </article>
  );
};

export default UserProfile;

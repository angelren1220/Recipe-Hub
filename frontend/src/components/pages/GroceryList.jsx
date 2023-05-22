import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from 'react-router-dom';

const GroceryList = function(props) {
  const { id } = useParams();
  const userId = localStorage.getItem('userId');
  // console.log(id);

  const {
    state,
    getGrocerylistById,
    deleteGrocerylist
  } = useApplicationData();

  useEffect(() => {
    getGrocerylistById(id);
  }, []);

  const handleDelete = (id) => {
    deleteGrocerylist(id);
    window.location = "/recipes";
  };


  const {grocerylist} = state;
  if (!grocerylist) {
    return <div>Loading...</div>;
  }

  return (
    <article className="grocerylist-list">
      <h1>Single grocery list details go here</h1>
      <div className="grocerylist-text">
        <h2 className="grocerylist-title">{grocerylist.name}</h2>
      </div>
    </article>
  );
};

export default GroceryList;
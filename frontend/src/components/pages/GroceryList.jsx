import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from 'react-router-dom';
import SystemMessage from "../SystemMessage";

const GroceryList = function(props) {
  const { id } = useParams();
  const userId = localStorage.getItem('userId');
  // console.log(id);

  const {
    state,
    getGrocerylistById,
    createGrocerylist
  } = useApplicationData();

  const [isItemSaved, setIsItemSaved] = useState(false);

  useEffect(() => {
    getGrocerylistById(id);

  }, [isItemSaved]);

  const { grocerylist } = state;

  const handleAddGrocerylist = () => {

    const newGrocerylist = { ...grocerylist, user_id: userId };

    // console.log(items);
    // console.log(grocerylist);
    // console.log(ingredients.length, Object.keys(items).length);
    createGrocerylist(newGrocerylist);
    setIsItemSaved(true);
  };

  if (!grocerylist || !grocerylist.items) {
    return <div>Loading...</div>;
  }

  return (
    <article className="grocerylist-list">
      <h1>Single grocery list details go here</h1>
      <div className="grocerylist-text">
        <h2 className="grocerylist-title">{grocerylist.name}</h2>
        <div className="items-list">
          <ul>
            {Object.entries(grocerylist.items).map(([itemName, itemData]) => (
              <li key={itemName}>
                <strong>{itemName}:</strong> {itemData.quantity} {itemData.units}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {userId && <div className="control-buttons">
        <SystemMessage
          show={isItemSaved}
          message={"Added successfully"}
          type="success" />
        <button onClick={(event) => handleAddGrocerylist()}>Add to Grocery Lists</button>
      </div>}
    </article>
  );
};

export default GroceryList;
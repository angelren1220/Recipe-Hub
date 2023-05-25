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

  const handleShowMessage = () => {
    setIsItemSaved(false);
  };

  if (!grocerylist || !grocerylist.items) {
    return <div>Loading...</div>;
  }

  return (
    <article className="grocerylist-list">
      <div className="grocerylist-text">
        <h2 className="grocerylist-title">{grocerylist.name}</h2>
        <div className="items-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantiy</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(grocerylist.items).map(([itemName, itemData], i) => (
                <tr key={i}>
                  <td><strong>{itemName}</strong></td>
                  <td>{itemData.quantity}</td>
                  <td>{itemData.units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {userId && <div className="control-buttons">
        <SystemMessage
          show={isItemSaved}
          message={"Added to grocery list successfully"}
          type="success"
          onShowMessage={handleShowMessage} />
        <button onClick={(event) => handleAddGrocerylist()}>Add to Grocery Lists</button>
      </div>}
    </article>
  );
};

export default GroceryList;
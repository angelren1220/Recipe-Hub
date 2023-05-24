/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/grocerylist_accordion.scss";
import useApplicationData from "../hooks/useApplicationData";


const CreateGrocerylist = function(props) {

  const {
    createGrocerylist,
  } = useApplicationData();

  const [grocerylistName, setGrocerylistName] = useState('');

  const handleSaveList = (userId, event) => {
    event.stopPropagation();

    const newGrocerylist = { user_id: userId, name: grocerylistName, items: {} };
    createGrocerylist(newGrocerylist);

  };

  return (
    <form className="add-new-grocerylist">
      <div>
        <label htmlFor="name">Grocery List Name:</label>
        <input
          type="text"
          id="grocerylist-name"
          name="name"
          value={grocerylistName}
          onChange={(event) => setGrocerylistName(event.target.value)}
        />
      </div>
      <button onClick={(event) => handleSaveList(props.userId, event)} disabled={!grocerylistName}>Save</button>
    </form>

  );
};

export default CreateGrocerylist;

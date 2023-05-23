import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/grocerylist_accordion.scss";
import useApplicationData from "../hooks/useApplicationData";
import { FaAngleDoubleDown, FaPlus, FaMinusCircle } from 'react-icons/fa';

const GrocerylistAccordion = function(props) {

  const {
    state,
    getGrocerylistsByUserId,
    createGrocerylist,
    updateGrocerylist,
    deleteGrocerylist
  } = useApplicationData();

  const [selected, setSelected] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [grocerylistName, setGrocerylistName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [units, setUnits] = useState('');
  const [isItemSaved, setIsItemSaved] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      getGrocerylistsByUserId(userId);
      setIsItemSaved(false);
    }
  }, [isItemSaved]);

  if (!userId) {
    return (<div>Empty</div>);
  }

  const toggle = (i, event) => {
    event.stopPropagation();
    const selectedGrocerylistId = state.grocerylists[i].id;
    if (selected.includes(selectedGrocerylistId)) {
      setSelected(selected.filter((id) => id !== selectedGrocerylistId));
    } else {
      setSelected([...selected, selectedGrocerylistId]);
    }
  };

  const handleButtonClick = (i, event) => {
    event.stopPropagation();
    const selectedGrocerylistId = state.grocerylists[i].id;
    setSelected([selectedGrocerylistId]);
    setShowForm(true);

  };

  const handleSaveItem = (grocerylist, event) => {
    event.stopPropagation();

    const currentItems = grocerylist.items;
    const newItem = {
      [name]: {
        units: units,
        quantity: quantity
      }
    };
    const updatedItems = { ...currentItems, ...newItem };
    const updatedGrocerylist = { ...grocerylist, items: updatedItems };

    updateGrocerylist(grocerylist.id, updatedGrocerylist);

    setName('');
    setQuantity('');
    setUnits('');
    setIsItemSaved(true);
  };

  const handleCancelItem = (event) => {
    event.stopPropagation();
    setName('');
    setQuantity('');
    setUnits('');
    setShowForm(false);
    setShowPopup(false);
  };

  const handleDeleteItem = (itemName, grocerylist, event) => {
    event.stopPropagation();

    const currentItems = grocerylist.items;

    const updatedItems = { ...currentItems };
    delete updatedItems[itemName];
    const updatedGrocerylist = { ...grocerylist, items: updatedItems };

    updateGrocerylist(grocerylist.id, updatedGrocerylist);

    setShowForm(false);
    setIsItemSaved(true);
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    deleteGrocerylist(id);
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };

  const handleAddNewGrocerylist = (event) => {
    event.stopPropagation();
    setShowPopup(true);
  };

  const handleSaveList = (userId, event) => {
    event.stopPropagation();

    const newGrocerylist = { user_id: userId, name: grocerylistName, items: {} };
    createGrocerylist(newGrocerylist);

    setShowForm(false);
  };

  const handleCancelList = (event) => {
    event.stopPropagation();
    setGrocerylistName('');
    setShowPopup(false);
  };

  return (
    <article className="grocerylist-accordions-wrapper">

      {state.grocerylists.map((grocerylist, i) => (
        <div className={selected.some(index => index === i) ? 'grocerylist-accordion selected' : 'grocerylist-accordion'} onClick={(event) => toggle(i, event)} key={i}>

          <div className="banner">
            <Link to={`/grocerylists/${grocerylist.id}`}>
              <h1>{grocerylist.name}</h1>
            </Link>
            <div className="banner-right">
              <h2 className="toggle" onClick={(event) => toggle(i, event)}><FaAngleDoubleDown /></h2>
            </div>

          </div>

          <div className={selected.includes(grocerylist.id) ? 'content show' : 'content'}>
            <div className="items-list">
              <ul>
                {Object.entries(grocerylist.items).map(([itemName, itemData]) => (
                  <li key={itemName}>
                    <strong>{itemName}:</strong> {itemData.quantity} {itemData.units}
                    <FaMinusCircle className="btn-delete" onClick={(event) => handleDeleteItem(itemName, grocerylist, event)} />
                  </li>
                ))}
              </ul>
            </div>
            {selected.includes(grocerylist.id) && (
              <div>
                <FaPlus className="btn-add" onClick={(event) => handleButtonClick(i, event)} />
                {showForm && (
                  <form>
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        onClick={handleClick}
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity">Quantity:</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        onClick={handleClick}
                      />
                    </div>
                    <div>
                      <label htmlFor="units">Units:</label>
                      <input
                        type="text"
                        id="units"
                        name="units"
                        value={units}
                        onChange={(event) => setUnits(event.target.value)}
                        onClick={handleClick}
                      />
                    </div>
                    <button onClick={(event) => handleSaveItem(grocerylist, event)}>Save Item</button>
                    <button onClick={(event) => handleCancelItem(event)}>Cancel</button>
                  </form>

                )}
              </div>
            )}

            <div className="control-buttons">
              <button onClick={(event) => handleDelete(grocerylist.id, event)}>Delete Grocerylist</button>
            </div>

          </div>

        </div>
      ))}

      <div className="add-new-grocerylist">

        <button onClick={(event) => handleAddNewGrocerylist(event)}>Add new grocery list</button>
        {showPopup && (
          <form className="add-new-grocerylist">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="grocerylist-name"
                name="name"
                value={grocerylistName}
                onChange={(event) => setGrocerylistName(event.target.value)}
              />
            </div>
            <button onClick={(event) => handleSaveList(userId, event)}>Save List</button>
            <button onClick={(event) => handleCancelList(event)}>Cancel</button>
          </form>
        )}
      </div>
    </article>
  );
};

export default GrocerylistAccordion;

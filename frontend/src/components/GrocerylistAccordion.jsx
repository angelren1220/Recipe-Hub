import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/grocerylist_accordion.scss";
import useApplicationData from "../hooks/useApplicationData";

import SendLinkForm from "./SendLinkForm";
import Popup from "./Popup";
import CreateGrocerylist from "./CreateGroceryList";

const GrocerylistAccordion = function(props) {

  const {
    state,
    getGrocerylistsByUserId,
    updateGrocerylist,
    deleteGrocerylist,
    createMessage
  } = useApplicationData();

  const [selected, setSelected] = useState([]);

  const [name, setName] = useState('');

  const [quantity, setQuantity] = useState('');
  const [units, setUnits] = useState('');
  const [isItemSaved, setIsItemSaved] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [selectedGroceryListForPopup, setSelectedGroceryListForPopup] = useState(null);

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

  // passes grocery list id and subject_type "GroceryList" to the popup form
  const handleSendGroceryLink = (id, subjectType, event) => {
    event.stopPropagation();
    setShowPopup(true);
    setSelectedGroceryListForPopup({ id, subjectType });
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedGroceryListForPopup(null);
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

  const handleDeleteItem = (itemName, grocerylist, event) => {
    event.stopPropagation();

    const currentItems = grocerylist.items;

    const updatedItems = { ...currentItems };
    delete updatedItems[itemName];
    const updatedGrocerylist = { ...grocerylist, items: updatedItems };

    updateGrocerylist(grocerylist.id, updatedGrocerylist);

    setIsItemSaved(true);
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    deleteGrocerylist(id);
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };


  return (
    <article className="grocerylist-accordions-wrapper">

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <SendLinkForm
              subjectType={selectedGroceryListForPopup.subjectType}
              subjectId={selectedGroceryListForPopup.id}
              onClose={closePopup}
              createMessage={createMessage}
            />
          </div>
        </div>
      )}

      {state.grocerylists.map((grocerylist, i) => (
        <div className={selected.some(index => index === i) ? 'grocerylist-accordion selected' : 'grocerylist-accordion'} onClick={(event) => toggle(i, event)} key={i}>

          <div className="banner">
            <Link to={`/grocerylists/${grocerylist.id}`}>
              <h1>{grocerylist.name}</h1>
            </Link>
            <div className="banner-right">

              <h2 className="toggle" onClick={(event) => toggle(i, event)}>+</h2>

            </div>

          </div>

          <div className={selected.includes(grocerylist.id) ? 'grocerylist-content show' : 'grocerylist-content'}>
            <div className="items-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantiy</th>
                    <th>Unit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(grocerylist.items).map(([itemName, itemData], i) => (
                    <tr key={i}>
                      <td><strong>{itemName}</strong></td> 
                      <td>{itemData.quantity}</td>
                      <td>{itemData.units}</td>
                      <td><button className="btn-delete" onClick={(event) => handleDeleteItem(itemName, grocerylist, event)}>x</button></td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selected.includes(grocerylist.id) && (
            <div>

              <Popup popupMessage={"+"}>

                <form className="form-container">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onClick={handleClick}
                  />
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    onClick={handleClick}
                  />
                  <label htmlFor="units">Units:</label>
                  <input
                    type="text"
                    id="units"
                    name="units"
                    value={units}
                    onChange={(event) => setUnits(event.target.value)}
                    onClick={handleClick}
                  />
                  <button onClick={(event) => handleSaveItem(grocerylist, event)} disabled={!name}>Save Item</button>
                </form>


              </Popup>
            </div>
          )}

          <div className="control-buttons">
            <Popup popupMessage={"Delete Grocery List"}>
              <button onClick={(event) => handleDelete(grocerylist.id, event)}>Confirm Delete</button>
            </Popup>
            <button onClick={(event) => handleSendGroceryLink(grocerylist.id, "GroceryList", event)}> Share Grocery List </button>
          </div>

        </div>

        </div>
  ))
}

  < div className = "add-new-grocerylist" >

    <Popup popupMessage="Create a Grocery List">

      <CreateGrocerylist userId={userId} />

    </Popup>
      </div >
    </article >
  );
};

export default GrocerylistAccordion;

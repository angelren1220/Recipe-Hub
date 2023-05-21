import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/grocerylist_accordion.scss";
import useApplicationData from "../hooks/useApplicationData";


const GrocerylistAccordion = function(props) {

  const {
    state,
    dispatch,
    getGrocerylistsByUserId,
    createGrocerylist,
    updateGrocerylist,
    deleteGrocerylist
  } = useApplicationData();

  const [selected, setSelected] = useState([]);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      getGrocerylistsByUserId(userId);
    }
  }, []);

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

  const handleDelete = (id, event) => {
    event.stopPropagation();
    deleteGrocerylist(id);
  };

  return (
    <article className="grocerylist-accordions-wrapper">
      {state.grocerylists.map((item, i) => (
        <div className={selected.some(index => index === i) ? 'grocerylist-accordion selected' : 'grocerylist-accordion'} key={i} onClick={(event) => toggle(i, event)}>

          <div className="banner">
            <h1>{item.name}</h1>
            <div className="banner-right">
              <h2 className="toggle">{selected.includes(i) ? '-' : '+'}</h2>
            </div>

          </div>

          <div className={selected.includes(item.id) ? 'content show' : 'content'}>

            <div className="control-buttons">
              <button onClick={(event) => handleDelete(item.id, event)}>Delete Grocerylist</button>
              <Link to={`/edit/${item.id}`}>
                <button>Edit Grocerylist</button>
              </Link>
            </div>

          </div>

        </div>
      ))}
    </article>
  );
};

export default GrocerylistAccordion;

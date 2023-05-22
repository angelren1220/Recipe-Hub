import React, { useEffect, useState } from "react";
import "../styles/message_accordion.scss";
import { Link } from "react-router-dom";

const MessageAccordion = ({ state, messages, deleteMessage }) => {

  const [selected, setSelected] = useState([]);

  console.log("🥰", state)

  const toggle = (id, event) => {
    event.stopPropagation();
    if (selected.includes(id)) {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <article className="message-accordions-wrapper">
      {messages.map((item) => (
        <div
          className={selected.includes(item.id) ? 'message-accordion selected' : 'message-accordion'}
          key={item.id}
          onClick={(event) => toggle(item.id, event)}
        >
          <div className="banner">
          <div className="banner-left">
            {item.subject_type === "Book" && (
              <Link to={`/books/${item.subject_id}`}>
                <h1>{item.subject_type}</h1>
              </Link>
            )}
            {item.subject_type === "Recipe" && (
              <Link to={`/recipes/${item.subject_id}`}>
                <h1>{item.subject_type}</h1>
              </Link>
            )}
            {item.subject_type === "GroceryList" && (
              <Link to={`/grocerylists/${item.subject_id}`}>
                <h1>{item.subject_type}</h1>
              </Link>
            )}
            <h2>From: USER ID {item.sender_id}</h2>
          </div>
            <div className="banner-right">
              <h2 className="toggle">{selected.includes(item.id) ? '-' : '+'}</h2>
            </div>
          </div>
          {selected.includes(item.id) && (
            <div className="message-content show">
              <h2>{item.message}</h2>
            </div>
          )}
        </div>
      ))}
    </article>
  );
};

export default MessageAccordion;

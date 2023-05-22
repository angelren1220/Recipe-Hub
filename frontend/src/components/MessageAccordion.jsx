import React, { useEffect, useState } from "react";
import "../styles/message_accordion.scss";
import { Link } from "react-router-dom";

const MessageAccordion = ({ messages, deleteMessage, showReceivedMessages }) => {
  const [selected, setSelected] = useState([]);
  
  console.log("🥰", messages);

  // Function to format the date in a desired format
  const formatDate = (dateString) => {
    // Parse the date string manually
    const year = dateString.slice(0, 4);
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    const time = dateString.slice(11, 19);

    // Construct a new date object with the parsed components
    const date = new Date(`${year}-${month}-${day}T${time}`);

    return `${date.toDateString()} ${date.toLocaleTimeString()}`;
  };

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
              {/* Update the Link paths based on item.subject_type */}
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
              {showReceivedMessages ? (
                <h2>From: USER ID {item.sender_id}</h2>
              ) : (
                <h2>Sent to: USER ID {item.recipient_id}</h2>
              )
              }
              <h3>{formatDate(item.created_at)}</h3>
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

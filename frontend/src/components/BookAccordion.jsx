import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/book_accordion.scss";
import Loop from "./LoopScroll";

const BookAccordion = function({ books, deleteBook }) {
  const [selected, setSelected] = useState([]);

  const toggle = (i, event) => {
    event.stopPropagation();
    const selectedBookId = books[i].id;
    if (selected.includes(selectedBookId)) {
      setSelected(selected.filter((id) => id !== selectedBookId));
    } else {
      setSelected([...selected, selectedBookId]);
    }
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    deleteBook(id);
  };

  const dataReady = books.length > 0; // Check if the books data is available

  // Get the height of the parent container
  const parentHeight = document.querySelector('.book-accordions-wrapper')?.offsetHeight;

  return (
    <article className="book-accordions-wrapper ">
      <Loop dataReady={dataReady} parentHeight={parentHeight}>
        {books.map((item, i) => (
          <div className={selected.some((index) => index === i) ? 'book-accordion selected' : 'book-accordion'} key={i} onClick={(event) => toggle(i, event)}>
            <div className="banner">
              <div className="banner-left">
                <Link to={`/books/${item.id}`}>
                  <h1>{item.name}</h1>
                </Link>
                <h2>By: {item.first_name}</h2>
              </div>
              <div className="banner-right">
                <h2 className="toggle">{selected.includes(i) ? '-' : '+'}</h2>
              </div>
            </div>
            <div className={selected.includes(item.id) ? 'content show' : 'content'}>
              <h2>Description: <p>{item.description}</p></h2>
              <div className="control-buttons">
                <button onClick={(event) => handleDelete(item.id, event)}>Delete Book</button>
                <Link to={`/edit/${item.id}`}>
                  <button>Edit Description</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Loop>
    </article>
  );
};

export default BookAccordion;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/book_accordion.scss";

const BookAccordion = function({ books, deleteBook, bookmarks, deleteBookmark }) {
  const [selected, setSelected] = useState([]);
  const [booksState, setBooks] = useState(books); // Declare books state

  useEffect(() => {
    setBooks(books); // Update books state when the prop changes
  }, [books]);

  const toggle = (i, event) => {
    event.stopPropagation();
    const selectedBookId = booksState[i].id;
    if (selected.includes(selectedBookId)) {
      setSelected(selected.filter((id) => id !== selectedBookId));
    } else {
      setSelected([...selected, selectedBookId]);
    }
  };

  const handleDelete = (id, event) => {
    if (bookmarks && selected.includes(id)) {
      const bookmark = bookmarks.find((bookmark) => bookmark.book.id === id);
      if (bookmark) {
        deleteBookmark(bookmark.id);
        console.log('🐷 deleted bookmark!');

        // Update the books state by filtering out the deleted book
        const updatedBooks = booksState.filter((book) => book.id !== id);
        setBooks(updatedBooks);
      }
    } else {
      deleteBook(id);
      console.log('🦊 deleted book!');
    }
  };

  return (
    <article className="book-accordions-wrapper">
      {booksState.map((item, i) => (
        <div
          className={selected.some((index) => index === i) ? 'book-accordion selected' : 'book-accordion'}
          key={i}
          onClick={(event) => toggle(i, event)}
        >
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
              {bookmarks && (
                <button onClick={(event) => handleDelete(item.id, event)}>Remove Bookmark</button>
              )}
              {!bookmarks && (
                <>
                  <button onClick={(event) => handleDelete(item.id, event)}>Delete Book</button>
                  <Link to={`/edit/${item.id}`}>
                    <button>Edit Description</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default BookAccordion;
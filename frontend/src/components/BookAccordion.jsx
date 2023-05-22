import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DescriptionEditor from "./DescriptionEditor";
import "../styles/book_accordion.scss";

const BookAccordion = ({
  books,
  deleteBook,
  bookmarks,
  deleteBookmark,
  updateBookDescription,
}) => {
  const [selected, setSelected] = useState([]);
  const [booksState, setBooks] = useState(books); // Declare books state
  const [editingBookId, setEditingBookId] = useState(null);

  useEffect(() => {
    setBooks(books);
    console.log(books)
  }, [books]);

  const toggle = (id, event) => {
    event.stopPropagation();
    if (selected.includes(id)) {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    if (bookmarks && selected.includes(id)) {
      const bookmark = bookmarks.find((bookmark) => bookmark.book.id === id); // Use id instead of item.id
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

  const handleEditDescription = (id, event) => {
    event.stopPropagation();
    setEditingBookId(id);
  };

  const handleSaveDescription = (id, editedDescription) => {
    updateBookDescription(id, editedDescription)
      .then((response) => {
        console.log('📝 Updated description:', editedDescription);

        // Update the books state with the edited description
        setBooks((prevBooks) =>
          prevBooks.map((book) => {
            if (book.id === id) {
              return { ...book, description: editedDescription };
            }
            return book;
          })
        );

        // Reset the editing state
        setEditingBookId(null);
      })
      .catch((error) => {
        console.error('Error updating description:', error);
      });
  };

  const handleCancelDescription = () => {
    // Reset the editing state without saving
    setEditingBookId(null);
  };

  return (
    <article className="book-accordions-wrapper">
      {booksState.map((item) => (
        <div
          className={selected.includes(item.id) ? 'book-accordion selected' : 'book-accordion'}
          key={item.id}
          onClick={(event) => toggle(item.id, event)}
        >
          <div className="banner">
            <div className="banner-left">
              <Link to={`/books/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
              <h2>By: {item.first_name}</h2>
            </div>
            <div className="banner-right">
              <h2 className="toggle">{selected.includes(item.id) ? '-' : '+'}</h2>
            </div>
          </div>
          {selected.includes(item.id) && (
            <div className="book-content show">
              {editingBookId === item.id ? (
                <DescriptionEditor
                  initialDescription={item.description}
                  onSave={(editedDescription) => handleSaveDescription(item.id, editedDescription)}
                  onCancel={handleCancelDescription}
                />
              ) : (
                <>
                  <h2>{item.description}</h2>
                  <div className="control-buttons">
                    {bookmarks && (
                      <button onClick={(event) => handleDelete(item.id, event)}>Remove Bookmark</button>
                    )}
                    {!bookmarks && (
                      <>
                        <button onClick={(event) => handleDelete(item.id, event)}>Delete Book</button>
                        <button onClick={(event) => handleEditDescription(item.id, event)}>
                          {item.description ? "Edit Description" : "Add Description"}
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </article>
  );
};

export default BookAccordion;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DescriptionEditor from "./DescriptionEditor";
import "../styles/book_accordion.scss";

const BookAccordion = ({ books, deleteBook, bookmarks, deleteBookmark, showBookmarks }) => {
  const [selected, setSelected] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null);

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
    if (bookmarks && selected.includes(id)) {
      const bookmark = bookmarks.find((bookmark) => bookmark.book.id === id);
      if (bookmark) {
        deleteBookmark(bookmark.id);
        console.log('🐷 deleted bookmark!');
      }
    } else {
      deleteBook(id);
      console.log('🦊 deleted book!')
    }
  };

  const handleEdit = (id, event) => {
    event.stopPropagation();
    setEditingBookId(id);
  };

  const handleSaveDescription = (id, editedDescription) => {
    // Handle saving the edited description
    console.log('📝 Saving edited description:', editedDescription);

    // Reset the editing state
    setEditingBookId(null);
  };

  const handleCancelDescription = () => {
    // Reset the editing state without saving
    setEditingBookId(null);
  };

  return (
    <article className="book-accordions-wrapper">
      {books.map((item, i) => (
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
          {selected.includes(item.id) && (
            <div className="content show">
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
                    {showBookmarks && (
                      <button onClick={(event) => handleDelete(item.id, event)}>Remove Bookmark</button>
                    )}
                    {!showBookmarks && (
                      <>
                        <button onClick={(event) => handleDelete(item.id, event)}>Delete Book</button>
                        <button onClick={(event) => handleEdit(item.id, event)}>
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

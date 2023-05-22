import React, { useEffect, useState } from "react";
import "../styles/book_accordion.scss";

const MessageAccordion = ({
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
  }, [books]);

  return (
    <div>
      
    </div>
  );
};

export default MessageAccordion;

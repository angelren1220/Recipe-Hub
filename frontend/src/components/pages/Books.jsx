import React, { useEffect, useState } from "react";
import BookAccordion from "../BookAccordion";
import useApplicationData from "../../hooks/useApplicationData";

const Books = function(props) {
  const {
    state,
    getBooksByUserID,
    deleteBook,
    deleteBookmark,
    updateBookDescription
  } = useApplicationData();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getBooksByUserID(userId);
  }, []);

  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleBookmarksToggle = () => {
    setShowBookmarks((prevShowBookmarks) => !prevShowBookmarks);
  };

  // Extract bookmarked books from state.bookmarks if it is defined
  const bookmarkedBooks = state.bookmarks?.map((bookmark) => bookmark.book) || [];

  return (
    <article className="books">
      <h1>All of the current user's books go here</h1>
      <button onClick={handleBookmarksToggle}>Bookmarks</button>
      {showBookmarks ? (
        <BookAccordion
          books={bookmarkedBooks}
          bookmarks={state.bookmarks}
          deleteBookmark={deleteBookmark}
          updateBookDescription={updateBookDescription}
        />
      ) : (
        <BookAccordion
          books={state.books}
          deleteBook={deleteBook}
          updateBookDescription={updateBookDescription}
        />
      )}
    </article>
  );
};

export default Books;
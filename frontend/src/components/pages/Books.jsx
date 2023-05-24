import React, { useEffect, useState } from "react";
import BookAccordion from "../BookAccordion";
import useApplicationData from "../../hooks/useApplicationData";

const Books = function(props) {
  const {
    state,
    getBooksByUserID,
    deleteBook,
    deleteBookmark,
    updateBookDescription,
    createMessage,
    createBookmark
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
      <h1>Bookshelf</h1>
      <button onClick={handleBookmarksToggle}>Bookmarks</button>
      {showBookmarks ? (
        <BookAccordion
          books={bookmarkedBooks}
          bookmarks={state.bookmarks}
          deleteBookmark={deleteBookmark}
          createMessage={createMessage}
        />
      ) : (
        <BookAccordion
          books={state.books}
          deleteBook={deleteBook}
          updateBookDescription={updateBookDescription}
          createMessage={createMessage}
          createBookmark={createBookmark}
        />
      )}
    </article>
  );
};

export default Books;

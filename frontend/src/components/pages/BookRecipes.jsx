import React, { useEffect, useState } from "react";
import RecipeAccordion from "../RecipeAccordion";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from "react-router-dom";
import UserInfo from "../UserInfo";

const BooksRecipes = function(props) {

  const {
    state,
    addRecipe,
    getBooksByUserID,
    getBookByBookID,
    deleteRecipe,
    createMessage,
    createBookmark
  } = useApplicationData();

  const userId = localStorage.getItem('userId');

  //current book id from the url
  const { id } = useParams();

  const [bookState, setBookState] = useState(null);

  useEffect(() => {
    const getBookData = async function() {
      const book = await getBookByBookID(id);
      setBookState(book);
    };
    getBookData();

  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getBooksByUserID(userId);
  }, []);
  
  const handleBookmark = () => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    event.stopPropagation();
    console.log("bookID:", id ,"userID:", userId)
    createBookmark( userId, id);
  }

  return (
    <>
      {bookState &&
        <article className="recipes-list">
          <h1>{`${bookState.book.name}`}</h1>
          <UserInfo userId={bookState.user.id}/>
          <p>{bookState.book.description}</p>

          {bookState.recipes.length === 0 && <h3>This Book has no Recipes!</h3>}
          <button onClick={() => handleBookmark()}> Bookmark this Book </button>

          <RecipeAccordion
            recipes={bookState.recipes}
            userId={userId}
            deleteRecipe={deleteRecipe}
            createMessage={createMessage}
            userBooks={state.books}
            addRecipe={addRecipe}
          />
        </article>
      }
    </>
  );
};

export default BooksRecipes;
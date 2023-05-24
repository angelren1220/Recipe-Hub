import React, { useEffect, useState } from "react";
import RecipeAccordion from "../RecipeAccordion";
import Loop from "../LoopScroll";
import useApplicationData from "../../hooks/useApplicationData";
import { Link, useParams } from "react-router-dom";
import UserInfo from "../UserInfo";

const BooksRecipes = function(props) {

  const {
    state,
    addRecipe,
    getBooksByUserID,
    getBookByBookID,
    deleteRecipe,
    createMessage
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

  return (
    <>
      {bookState &&
        <article className="recipes-list">
          <h1>{`${bookState.book.name}`}</h1>
          <UserInfo userId={bookState.user.id}/>
          <p>{bookState.book.description}</p>

          {bookState.recipes.length === 0 && <h3>This Book has no recipes!</h3>}

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
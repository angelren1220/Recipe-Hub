import React, { useEffect, useState } from "react";
import RecipeAccordion from "../RecipeAccordion";
import Loop from "../LoopScroll";
import useApplicationData from "../../hooks/useApplicationData";
import { Link, useParams } from "react-router-dom";
import UserInfo from "../UserInfo";

const BooksRecipes = function(props) {

  const {
    state,
    getRecipesByUserId,
    getUserById,
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

  return (
    <>
      {bookState &&
        <article className="recipes-list">
          <h1>{`${bookState.book.name}`}</h1>
          <UserInfo userId={bookState.user.id}/>
          {bookState.recipes.length === 0 && <h3>This Book is currently empty!</h3>}
          <RecipeAccordion
            recipes={bookState.recipes}
            userId={userId}
            deleteRecipe={deleteRecipe}
            createMessage={createMessage}
          />
        </article>
      }
    </>
  );
};

export default BooksRecipes;
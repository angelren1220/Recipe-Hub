import {
  // useEffect,
  useReducer
} from 'react';
import dataReducer, {
  // SET_APPLICATION_DATA,
  SET_INGREDIENTS,
  SET_RECIPES,
  SET_USER,
  SET_RECIPE,
  SET_BOOKS
} from './dataReducer';

import axios from 'axios';

// import { useCookies } from 'react-cookie';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    user: [],
    recipe: [],
    recipes: [],
    ingredients: [],
    books: [],
    bookmarks: [],
    loading: true,
  });

  // handle error messages
  const sendErrorMessage = (error) => {
    const message = (Object.entries(error.response.data)
      .reduce((str, [key, val]) => `${str} ${key} ${val}`, '')) || ("Something wrong with connection...");
    alert(message);
  };

  const getAllRecipes = () => {
    axios.get('/api/recipes')
      .then((response) => {
        // console.log("🙈", response.data);
        dispatch({
          type: SET_RECIPES,
          recipes: response.data
        });
      })
      .catch((error) => {

      });
  };

  const getIngredients = (recipeId) => {
    axios.get(`/api/recipes/${recipeId}`)
      .then((response) => {
        // console.log("🙈", response.data);
        dispatch({
          type: SET_INGREDIENTS,
          ingredients: response.data.ingredients
        });
      })
      .catch((error) => {

      });
  };

  const getRecipeById = (recipeId) => {

    axios.get(`/api/recipes/${recipeId}`)
      .then((response) => {
        dispatch({
          type: SET_RECIPE,
          recipe: response.data.recipe
        });
        console.log("🙈", response.data.recipe);
      })
      .catch((error) => {

      });
  };

  const getRecipesByUserId = (userId) => {

    axios.get(`/api/users/${userId}`)
      .then((response) => {
        // console.log("🙈", response.data);
        dispatch({
          type: SET_RECIPES,
          recipes: response.data.recipes
        });
      })
      .catch((error) => {
      
      });
  };

  const getBooksByUserID = (userId) => {
    if (!userId) {
      return;
    }
    axios.get(`/api/users/${userId}`)
      .then((response) => {
        console.log("🙈", response.data);
        dispatch({
          type: SET_BOOKS,
          books: response.data.books,
          bookmarks: response.data.bookmarked_books
        });
      })
      .catch((error) => {
      });
  };

  const createUser = (user) => {
    // the object post to backend should be the exact same name with it in database

    axios.post("/api/users", { user })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SET_USER,
          user: response.data.user
        });
        // setCookie('Current User', response.data.id, { path: '/' });
        localStorage.setItem('userId', response.data.session.user_id);

        // Create a new book object using the first_name of the created user
        const book = {
          title: `${user.first_name}'s favorites`,
          user_id: response.data.session.user_id
        };

        // Make a secondary POST request to create the book object
        axios.post("/api/books", { book })
          .then((bookResponse) => {
            console.log(bookResponse);
            window.location = "/recipes";
          })
          .catch((error) => {

            sendErrorMessage(error);

            console.error(error);
            // Handle book creation failure

          });
      })
      .catch((error) => {
        sendErrorMessage(error);
      });
  };


  const loginUser = (user) => {

    axios.post("/api/sessions", user)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SET_USER,
          user: response.data.user
        });
        // setCookie('Current User', response.data.user.id, { path: '/' });
        localStorage.setItem('userId', response.data.session.user_id);
        // const userId = localStorage.getItem('userId');
        // console.log(userId);
        window.location = "/recipes";
      })
      .catch((error) => {
        console.log(error);
        sendErrorMessage(error);
      });
  };

  const logoutUser = () => {

    axios.delete("/api/sessions/1")
      .then((response) => {
        console.log(response);
        localStorage.removeItem('userId');
        window.location = "/login";
      })
      .catch((error) => {

      });
  };

  const createRecipe = (recipe) => {
    axios.post("/api/recipes", { recipe })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {

      });
  };

  const updateRecipe = (id, recipe) => {
    axios.put(`/api/recipes/${id}`, { recipe })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {

      });
  };

  const updateBookDescription = (id, description) => {
    return axios.put(`/api/books/${id}`, { description })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {

      });
  };

  const deleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`)
      .then((response) => {
        const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
        dispatch({
          type: SET_RECIPES,
          recipes: updatedRecipes
        });
      })
      .catch((error) => {

      });
  };

  const deleteBook = (id) => {
    axios.delete(`/api/books/${id}`)
      .then((response) => {
        const updatedBooks = state.books.filter(book => book.id !== id);
        dispatch({
          type: SET_BOOKS,
          books: updatedBooks
        });
      })
      .catch((error) => {

      });
  };

  const deleteBookmark = (id) => {
    axios.delete(`/api/bookmarked_books/${id}`)
      .then((response) => {
        const updatedBookmarks = state.bookmarks.filter(bookmark => bookmark.id !== id);
        dispatch({
          type: SET_BOOKMARKS,
          bookmarks: updatedBookmarks
        });
      })
      .catch((error) => {

      });
  };

  return {
    state,
    dispatch,
    getAllRecipes,
    getIngredients,
    getRecipeById,
    getRecipesByUserId,
    getBooksByUserID,
    createUser,
    loginUser,
    logoutUser,
    createRecipe,
    updateRecipe,
    updateBookDescription,
    deleteRecipe,
    deleteBook,
    deleteBookmark
  };
};

export default useApplicationData;
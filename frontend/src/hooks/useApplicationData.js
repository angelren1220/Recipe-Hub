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
  SET_BOOKS,
  SET_BOOKMARKS,
  SET_MESSAGES,
  SET_GROCERYLISTS,
  SET_GROCERYLIST,
  SET_ERRORMESSAGE
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
    messages: [],
    grocerylists: [],
    grocerylist: [],
    errorMessage: "",
    loading: true,
  });

  // handle error messages
  const sendErrorMessage = (error) => {
    const message = (Object.entries(error.response.data)
      .reduce((str, [key, val]) => `${str} ${key} ${val}`, '')) || ("Something wrong with connection...");
      dispatch({
        type: SET_ERRORMESSAGE,
        errorMessage: message
      });
      console.log(message)
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
    return axios.get(`/api/recipes/${recipeId}`)
      .then((response) => {
        // console.log("🙈", response.data);
        dispatch({
          type: SET_INGREDIENTS,
          ingredients: response.data.ingredients
        });
        return response.data.ingredients;
      })
      .catch((error) => {

      });
  };

  const updateIngredient = (id, ingredient) => {
    axios.put(`/api/ingredients/${id}`, { ingredient })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const message = Object.entries(error.response.data)
          .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
      });
  };

  const createIngredient = async (ingredient) => {
    return axios.post("/api/ingredients", { ingredient })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        const message = Object.entries(error.response.data)
          .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        alert(message);
      });
  };

  const deleteIngredient = (id) => {
    axios.delete(`/api/ingredients/${id}`)
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


  const getRecipeById = (recipeId) => {

    axios.get(`/api/recipes/${recipeId}`)
      .then((response) => {
        dispatch({
          type: SET_RECIPE,
          recipe: response.data.recipe
        });
        dispatch({
          type: SET_USER,
          user: response.data.user
        });
        
        // console.log("🙈", response.data.recipe);
      })
      .catch((error) => {

      });
  };

  const getRecipesByUserId = (userId) => {

    return axios.get(`/api/users/${userId}`)
      .then((response) => {
        // console.log("🙈", response.data);
        dispatch({
          type: SET_RECIPES,
          recipes: response.data.recipes
        });
        return response.data;
      })
      .catch((error) => {

      });
  };

  const getBooksByUserID = (userId) => {
    if (!userId) {
      return Promise.resolve(); // Return a resolved promise if userId is not available
    }
    return axios.get(`/api/users/${userId}`)
      .then((response) => {
        dispatch({
          type: SET_BOOKS,
          books: response.data.books,
          bookmarks: response.data.bookmarked_books.map((item) => {
            return {
              bookmarked_book: item.bookmarked_book,
              book: item.book,
            };
          })
        });
        dispatch({
          type: SET_USER,
          user: response.data.user
        })
      })
      .catch((error) => {
        // Handle error if needed
      });
  };

  const getBookByBookID = (bookId) => {
    if (!bookId) {
      return Promise.resolve(); // Return a resolved promise if userId is not available
    }
    return axios.get(`/api/books/${bookId}`)
      .then((response) => {
        console.log('🎄',response.data);
        return response.data;
      })
      .catch((error) => {
        // Handle error if needed
      });
  };


  const getMessagesByUserID = (userId) => {
    if (!userId) {
      return Promise.resolve(); // Return a resolved promise if userId is not available
    }
    return axios.get(`/api/users/${userId}`)
      .then((response) => {
        const filteredMessages = response.data.messages.filter((message) => {
          return ((userId === message.recipient_id && message.recipient_deleted === false) || (userId === message.sender_id && message.sender_deleted === false));
        });

        dispatch({
          type: SET_MESSAGES,
          messages: filteredMessages
        });
        console.log("😎 Messages:", filteredMessages); // Add this console.log statement
      })
      .catch((error) => {
        // Handle error if needed
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
          name: `${user.first_name}'s favorites`,
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

  const createMessage = (message) => {
    axios
      .post("/api/messages", { message })
      .then((response) => {
        console.log("💫", response.data.message);
        const newMessage = response.data.message;

        dispatch({
          type: SET_MESSAGES,
          messages: [...state.messages, newMessage], // Add the new message to the existing messages array
        });
      })
      .catch((error) => {
        console.error('Error creating message:', error);
      });
  };

  const createBookmark = (bookmark) => {
    axios
      .post("/api/bookmarked_books", { bookmark })
      .then((response) => {
        console.log("💫", response.bookmarked_book);
        const newBookmark = response.data.bookmarked_book;

        dispatch({
          type: SET_BOOKMARKS,
          messages: [...state.bookmarks, newBookmark], // Add the new message to the existing messages array
        });
      })
      .catch((error) => {
        console.error('Error creating bookmark:', error);
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
        // console.log(error.response.data);
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
        window.location = `/recipes/edit/${response.data.id}`;
      })
      .catch((error) => {
        console.error('Error creating bookmark:', error);
      });
  };

  const updateRecipe = (id, recipe) => {
    axios.put(`/api/recipes/${id}`, { recipe })
      .then((response) => {
        window.location = `/recipes/${response.data.id}`;
      })
      .catch((error) => {
        const message = Object.entries(error.response.data)
          .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);

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

  const addRecipe = (id) => {
    axios.put(`/api/books/${id}`, { recipe })
      .then((response) => {
        const updatedBook = response.data.book;
        dispatch({
          type: SET_BOOKS,
          recipes: updatedBook
        });
      })
      .catch((error) => {
        console.error('Error creating bookmark:', error);
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


  const deleteMessage = (id, userId, senderId, recipientId) => {
    const endpoint = `/api/messages/${id}`;
    const data = {};

    // Determine which user is invoking the function
    if (userId === senderId) {
      data.sender_deleted = true;
    } else if (userId === recipientId) {
      data.recipient_deleted = true;
    }

    axios
      .put(endpoint, { data })
      .then((response) => {
        // Update state
        const updatedMessages = state.messages.filter((message) => message.id !== id);
        dispatch({
          type: SET_MESSAGES,
          messages: updatedMessages,
        });
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  const getGrocerylistsByUserId = (userId) => {
    axios.get(`/api/users/${userId}`)
      .then((response) => {
        dispatch({
          type: SET_GROCERYLISTS,
          grocerylists: response.data.grocerylists
        });
        // console.log("🙈", response.data.grocerylists);

      })
      .catch((error) => {

      });
  };

  const createGrocerylist = (grocerylist) => {
    axios.post("/api/grocery_lists", { grocerylist })
      .then((response) => {
        // console.log(response);

      })
      .catch((error) => {

      });
  };

  const updateGrocerylist = (id, grocerylist) => {
    axios.put(`/api/grocery_lists/${id}`, { grocerylist })
      .then((response) => {
        console.log(response);
        // const updatedGrocerylists = state.grocerylists.map((item, i) => {
        //   if (i === id) {
        //     return grocerylist;
        //   }
        //   return item;
        // });

        // dispatch({
        //   type: SET_GROCERYLISTS,
        //   grocerylists: updatedGrocerylists
        // });
      })
      .catch((error) => {

      });
  };

  const deleteGrocerylist = (id) => {
    axios.delete(`/api/grocery_lists/${id}`)
      .then((response) => {
        const updatedGrocerylists = state.grocerylists.filter(grocerylist => grocerylist.id !== id);
        dispatch({
          type: SET_GROCERYLISTS,
          grocerylists: updatedGrocerylists
        });
      })
      .catch((error) => {

      });
  };

  const getGrocerylistById = (id) => {
    axios.get(`/api/grocery_lists/${id}`)
      .then((response) => {
        dispatch({
          type: SET_GROCERYLIST,
          grocerylist: response.data.grocerylist
        });
        // console.log("🙈", response.data.grocerylist);
      })
      .catch((error) => {

      });
  };
  const getUserById = (id) => {
    return axios.get(`/api/users/${id}`)
      .then((response) => {
        dispatch({
          type: SET_USER,
          user: response.data.user
        });

        dispatch({
          type: SET_BOOKS,
          books: response.data.books,
        });

        dispatch({
          type: SET_RECIPES,
          recipes: response.data.recipes,
        });

        dispatch({
          type: SET_GROCERYLISTS,
          grocerylists: response.data.grocerylists,
        });

        return response.data.user;
      // console.log("🙈", response.data);
    })
    .catch((error) => {

    });
  }

return {
  state,
  dispatch,
  getAllRecipes,
  getIngredients,
  updateIngredient,
  createIngredient,
  createMessage,
  createBookmark,
  addRecipe,
  deleteIngredient,
  getRecipeById,
  getRecipesByUserId,
  getBooksByUserID,
  getMessagesByUserID,
  createUser,
  loginUser,
  logoutUser,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  deleteBook,
  updateBookDescription,
  deleteBookmark,
  getGrocerylistsByUserId,
  createGrocerylist,
  updateGrocerylist,
  deleteGrocerylist,
  deleteMessage,
  getGrocerylistById,
  getUserById
};
};

export default useApplicationData;
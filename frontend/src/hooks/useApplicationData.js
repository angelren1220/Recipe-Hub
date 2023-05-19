import {
  // useEffect,
  useReducer
} from 'react';
import dataReducer, {
  // SET_APPLICATION_DATA,
  SET_INGREDIENTS,
  SET_RECIPES,
  SET_USER,

} from './dataReducer';
import axios from 'axios';

// import { useCookies } from 'react-cookie';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    user: [],
    recipes: [],
    ingredients: [],
    loading: true,
  });

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
        // const message = Object.entries(error.response.data)
        //   .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
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
        // const message = Object.entries(error.response.data)
        //   .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
      });
  };

  const getRecipesByUserID = (userId) => {
    // if (!userId) {
    //   userId = 1;
    // }
    axios.get(`/api/users/${userId}`)
      .then((response) => {
        // console.log("🙈", response.data);
        dispatch({
          type: SET_RECIPES,
          recipes: response.data.recipes
        });
      })
      .catch((error) => {
        // const message = Object.entries(error.response.data)
        //   .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
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
        
      })
      .catch((error) => {
        const message = Object.entries(error.response.data)
          .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        alert(message);
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
      })
      .catch((error) => {
        const message = Object.entries(error.response.data)
          .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        alert(message);
      });
  };

  const logoutUser = () => {
    axios.delete("/api/sessions/1")
      .then((response) => {
        console.log(response);
        localStorage.removeItem('userId');

      })
      .catch((error) => {
        // const message = Object.entries(error.response.data)
        //   .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
      });
  };

  const createRecipe = (recipe) => {
    axios.post("/api/recipes", { recipe })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // const message = Object.entries(error.response.data)
        //   .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
      });
  };

  const updateRecipe = (id, recipe) => {
    axios.put(`/api/recipes/${id}`, { recipe })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // const message = Object.entries(error.response.data)
        //   .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
      });
  };

  const deleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // const message = Object.entries(error.response.data)
        //   .reduce((str, [key, val]) => `${str} ${key} ${val}`, '');
        // alert(message);
      });
  };

  return {
    state,
    dispatch,
    getAllRecipes,
    getIngredients,
    getRecipesByUserID,
    createUser,
    loginUser,
    logoutUser,
    createRecipe,
    updateRecipe,
    deleteRecipe
  };
};

export default useApplicationData;
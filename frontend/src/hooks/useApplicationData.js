import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_APPLICATION_DATA,
  SET_INGREDIENTS,
  SET_RECIPES,

} from './dataReducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    recipes: [],
    ingredients: [],
    loading: true,
  });
  useEffect(() => {
    Promise.all([
      axios.get('/api/users'),
      axios.get('/api/recipes'),
      // axios.get('/api/ingredients')
    ])
      .then(
        (all) => {
          console.log(all);
          dispatch({
            type: SET_APPLICATION_DATA,
            users: all[0].data,
            recipes: all[1].data,
            // ingredients: all[2].data
          });
        })
      .catch((err) => console.log(err));
  }, []);

  const getIngredients = (recipeId) => {
    axios.get(`/api/recipes/${recipeId}`)
      .then((response) => {
        // console.log("🙈", response.data);
        dispatch({
          type: SET_INGREDIENTS,
          ingredients: response.data.ingredients
        });
      });
  };

  
  const createUser = (user) => {
    // const user = JSON.stringify(user);
    // the object post to backend should be the exact same name with it in database
    axios.post("/api/users", {user})
    .then((response) => {
      console.log(response);
    })
  }
  
  const createRecipe = (recipe) => {
    axios.put(`/api/receipes`, {recipe})
      .then((response) => {
        console.log(response);
      })
  }
  
  return {
    state,
    dispatch,
    getIngredients,
    createUser,
    createRecipe
  };
};

export default useApplicationData;
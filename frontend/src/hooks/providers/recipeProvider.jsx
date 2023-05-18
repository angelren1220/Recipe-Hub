import { createContext, useReducer, useEffect } from "react";
import dataReducer, { SET_RECIPES } from "../dataReducer";
import axios from "axios";

export const recipeContext = createContext();

export default function recipeProvider(props) {
  const [state, dispatch] = useReducer(dataReducer, {
    recipes: [],
    ingredients: [],
    loading: true,
  });

  useEffect(() => {

    axios.get('/api/recipes')
      .then(
        (reponse) => {
          console.log(reponse);
          dispatch({
            type: SET_RECIPES,
            recipes: reponse.data,

          });
        })
      .catch((err) => console.log(err));
  }, []);

  const createRecipe = (recipe) => {
    axios.post("/api/recipes", { recipe })
      .then((response) => {
        console.log(response);
      });
  };

  const providerData = { createRecipe };

  return (
    <recipeContext.Provider value={providerData}>
      {props.children}
    </recipeContext.Provider>
  );
}
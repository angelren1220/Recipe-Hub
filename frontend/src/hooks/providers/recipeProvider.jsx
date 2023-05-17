import { createContext, useState } from "react";

export const recipeContext = createContext();

export default function recipeProvider(props) {
  const [recipes, setRecipes] = useState();

  //functions to create new

  const createRecipe = () => {}

  const providerData = {  };

  return (
    <recipeContext.Provider value={providerData}>
      {props.children}
    </recipeContext.Provider>
  );
};
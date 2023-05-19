import { createContext, useState } from "react";

export const recipeEditContext = createContext();

const someRecipe = {
  id: 1,
  user_id: 1,
  name: "Vegan Pad Thai",
  directions: [
    "Soak the noodles",
    "Cook the noodles",
    "Prepare the sauce",
    "Cook the vegetables",
    "Combine everything"
  ],
  cooktime_minutes: 30,
  is_vegetarian: true,
  is_vegan: true,
  is_lowcarb: false,
  is_lactosefree: true,
  is_glutenfree: false,
  is_nutfree: false,
  image: "https://pinchofyum.com/wp-content/uploads/Vegetarian-Pad-Thai-Recipe.jpg",
  description: "A lovely take on a classic Pad Thai recipe"
};

const someIngredients = [
  {
    id: 1,
    recipe_id: 1,
    name: "Rice noodles",
    quantity: 250,
    units: "grams"
  },
  {
    id: 2,
    recipe_id: 1,
    name: "Tofu",
    quantity: 200,
    units: "grams"
  },
  {
    id: 3,
    recipe_id: 1,
    name: "Carrots",
    quantity: 2,
    units: "pieces"
  }
];

export default function RecipeEditModeProvider(props) {
  const [recipeEditMode, setRecipeEditMode] = useState('SUMMARY');
  const [currentRecipe, setCurrentRecipe] = useState(someRecipe);
  const [currentIngredients, setCurrentIngredients] = useState(someIngredients);


  //functions to change viewMode

  const recipeSummaryView = function() {
    setRecipeEditMode('SUMMARY');
  };

  const recipeIngredientsView = function() {
    setRecipeEditMode('INGREDIENTS');
  };

  const recipeDirectionsView = function() {
    setRecipeEditMode('DIRECTIONS');
  };

  //functions to change recipe

  const setRecipeName = function(name) {
    setCurrentRecipe({ ...currentRecipe, name });
  };

  const setRecipeDescription = function(description) {
    setCurrentRecipe({ ...currentRecipe, description });
  };

  const setRecipeCooktime = function(cooktime) {
    setCurrentRecipe({ ...currentRecipe,  cooktime_minutes: cooktime });
  };

  const setRecipeImage = function(image) {
    setCurrentRecipe({ ...currentRecipe, image });
  };

  //functions to change ingredients

  const providerData = {
    recipeEditMode,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView,
    currentRecipe,
    setRecipeName,
    setRecipeDescription,
    setRecipeCooktime,
    setRecipeImage,
    currentIngredients
  };

  return (
    <recipeEditContext.Provider value={providerData}>
      {props.children}
    </recipeEditContext.Provider>
  );
};
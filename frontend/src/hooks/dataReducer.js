export const SET_USER = 'SET_USERS';
export const SET_RECIPE = 'SET_RECIPE';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case SET_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
        loading: false,
      };
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };

    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        loading: false
      };

    case SET_APPLICATION_DATA:
      return {
        ...state,
        users: action.users,
        recipes: action.recipes,
        // ingredients: action.ingredients,
        loading: false
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default dataReducer;
export const SET_USERS = 'SET_USERS';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };

    case SET_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      }

    case SET_APPLICATION_DATA:
      return {
        ...state,
        users: action.users,
        recipes: action.recipes
      }
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default dataReducer;
import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_APPLICATION_DATA
} from './dataReducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    recipes: [],
    loading: true,
  });
  useEffect(() => {
    Promise.all([
      axios.get('/api/users'),
      axios.get('/api/recipes')
    ])
      .then(
        (all) => {
        console.log(all);
        dispatch({
          type: SET_APPLICATION_DATA,
          users: all[0].data,
          recipes: all[1].data
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
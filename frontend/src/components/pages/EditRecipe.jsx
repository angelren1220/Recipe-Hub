import { useState } from "react";
import { useParams } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";

import EditRecipeSummary from "../EditRecipeSummary";
import EditRecipeDirections from "../EditRecipeDirections";

const EditRecipe = function() {
  const {
    state,
    dispatch,
    getRecipesByUserID
  } = useApplicationData();

  const { id } = useParams();

  const getRecipe = {

  };

  const [editMode, setEditMode] = useState('SUMMARY');
  return (
    <>
      {editMode === 'SUMMARY' && <EditRecipeSummary />}
      {editMode === 'DIRECTIONS' && <EditRecipeDirections />}
    </>
  );
};

export default EditRecipe;
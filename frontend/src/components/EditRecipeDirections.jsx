import { useState } from "react";

const EditRecipeDirections = function() {
  const getRecipeDirections = ["Do step one.", "Do step two.", "Do step three."];
  const [directions, setDirections] = useState(getRecipeDirections);
  return (
    <>
      <h1>Edit Recipe Directions</h1>
      <p>{directions}</p>
    </>
  );
};

export default EditRecipeDirections;
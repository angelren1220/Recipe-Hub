import { useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const DirectionForm = function(props) {

  const {
    currentRecipe,
    setRecipeDirection,
    setRecipeDirections,
  } = useContext(recipeEditContext);

  const handleDelete = function() {
    const updatedDirections = [...currentRecipe.directions];
    console.log('🐿',updatedDirections);
    updatedDirections.splice(props.index, 1);
    console.log('🦔',updatedDirections);
    setRecipeDirections(updatedDirections);
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor={`direction${props.index}`} >{"Step " + (props.index + 1)}:</label>
        <input
          id={`direction${props.index}`}
          value={currentRecipe.directions[props.index]}
          onChange={(e) => setRecipeDirection(props.index, e.target.value)}
          name={`direction${props.index}`}
          type="text"
          placeholder={currentRecipe.directions[props.index]}
          required
        />
      </form>
      <button onClick={handleDelete}>{`Delete Step ${props.index + 1}`}</button>
    </>

  );
};


export default DirectionForm;
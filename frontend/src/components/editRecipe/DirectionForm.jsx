import { useContext } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const DirectionForm = function(props) {

  const {
    currentRecipe,
    setRecipeDirection,
  } = useContext(recipeEditContext);

  return (
    <form
      autoComplete="off"
      onSubmit={event => event.preventDefault()}
    >
      <>
        <label htmlFor={`direction${props.index}`} >{props.index}:</label>
        <input
          id={`direction${props.index}`}
          value={currentRecipe.directions[props.index]}
          onChange={(e) => setRecipeDirection(props.index, e.target.value)}
          name={`direction${props.index}`}
          type="text"
          placeholder={currentRecipe.directions[props.index]}
          required
        />
      </>
    </form>

  );
};


export default DirectionForm;
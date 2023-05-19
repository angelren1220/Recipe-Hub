import { useState, useContext, useEffect } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const IngredientForm = function(props) {
  //import from edit recipe context
  const {
    currentIngredients,
    setIngredient,
  } = useContext(recipeEditContext);

  //get the ingredient in question from currentIngredients using find by id
  const currentIngredient = currentIngredients.find(i => i.id === props.id);

  console.log('????????', currentIngredient);

  const [ingredientState, setIngredientState] = useState(currentIngredient);

  useEffect(() => {
    setIngredient(ingredientState);
  }, [setIngredient, ingredientState]);

  return (
    <>
      <h4>{ingredientState.name}</h4>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="name" >Ingredient:</label>
        <input
          id={`name${currentIngredient.id}`}
          value={currentIngredient.name}
          onChange={(e) => setIngredientState({ ...currentIngredient, name: e.target.value })}
          name={`name${currentIngredient.id}`}
          type="text"
          placeholder={currentIngredient.name ? `name${currentIngredient.id}` : 'Sugar'}
          required
        />
      </form>
    </>
  );
};

export default IngredientForm;
import { useState, useContext, useEffect } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const IngredientForm = function(props) {
  //import from edit recipe context
  const {
    currentIngredients,
    setIngredient,
    removeIngredient,
  } = useContext(recipeEditContext);

  const [currentIngredient, setCurrentIngredient] = useState(props.ingredient);
  console.log('🦧', currentIngredient);

  const handleIngredientChange = function(key, value) {
    setCurrentIngredient({ ...currentIngredient, [key]: value });
    setIngredient({ ...currentIngredients, currentIngredient });
  };

  const handleIngredientDelete = function() {
    setCurrentIngredient({...currentIngredient, delete: true});
  };

  const handleIngredientUndoDelete = function() {
    setCurrentIngredient({...currentIngredient, delete: false})
  };

  return (
    <>
      {!currentIngredient.delete && <>
        <h4>{currentIngredient.name + " " + currentIngredient.quantity + " " + currentIngredient.units}</h4>

        <form
          autoComplete="off"
          onSubmit={event => event.preventDefault()}
        >
          <label htmlFor={`name${currentIngredient.id}`} >Ingredient:</label>
          <input
            id={`name${currentIngredient.id}`}
            value={currentIngredient.name}
            onChange={(e) => handleIngredientChange('name', e.target.value)}
            name={`name${currentIngredient.id}`}
            type="text"
            placeholder={currentIngredient.name ? `name${currentIngredient.id}` : 'Sugar'}
            required
          />
          <label htmlFor={`quantity${currentIngredient.id}`} >Quantity:</label>
          <input
            id={`quantity${currentIngredient.id}`}
            value={currentIngredient.quantity}
            onChange={(e) => handleIngredientChange('quantity', e.target.value)}
            name={`quantity${currentIngredient.id}`}
            type="number"
            step=".01"
            placeholder={currentIngredient.name ? `quantity${currentIngredient.id}` : 1.5}
            required
          />
          <label htmlFor={`units${currentIngredient.id}`} >Units:</label>
          <input
            id={`units${currentIngredient.id}`}
            value={currentIngredient.units}
            onChange={(e) => handleIngredientChange('units', e.target.value)}
            name={`units${currentIngredient.id}`}
            type="text"
            placeholder={currentIngredient.name ? `units${currentIngredient.id}` : "cups"}
            required
          />
        </form>
        <button onClick={handleIngredientDelete}>{`Remove ${currentIngredient.name}`}</button>
      </>}
      {currentIngredient.delete && <button onClick={handleIngredientUndoDelete}>{`Undo Remove ${currentIngredient.name}`}</button>}
    </>
  );
};

export default IngredientForm;
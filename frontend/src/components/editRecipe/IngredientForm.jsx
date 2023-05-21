import { useState, useContext, useEffect } from "react";
import { recipeEditContext } from "../../hooks/providers/recipeEditMode";

const IngredientForm = function(props) {
  //import from edit recipe context
  const {
    currentIngredients,
    setIngredient,
    removeIngredient,
  } = useContext(recipeEditContext);
  
  //local state used in form used to keep track of a single ingredient
  const [currentIngredient, setCurrentIngredient] = useState(props.ingredient);
  console.log('🦧', currentIngredient);

  const handleIngredientChange = function(key, value) {
    const updatedIngredient = { ...currentIngredient, [key]: value };
    setCurrentIngredient(updatedIngredient);
    setIngredient(updatedIngredient);
  };
    

  const handleIngredientDelete = function() {
    const updatedIngredient = { ...currentIngredient, delete: true}
    setCurrentIngredient(updatedIngredient);
    setIngredient(updatedIngredient);
  };

  const handleIngredientUndoDelete = function() {
    const updatedIngredient = { ...currentIngredient, delete: false}
    setCurrentIngredient(updatedIngredient);
    setIngredient(updatedIngredient);
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
            placeholder={currentIngredient.name ? `name${currentIngredient.id}` : ''}
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
            placeholder={currentIngredient.name ? `quantity${currentIngredient.id}` : 0}
            required
          />
          <label htmlFor={`units${currentIngredient.id}`} >Units:</label>
          <input
            id={`units${currentIngredient.id}`}
            value={currentIngredient.units}
            onChange={(e) => handleIngredientChange('units', e.target.value)}
            name={`units${currentIngredient.id}`}
            type="text"
            placeholder={currentIngredient.name ? `units${currentIngredient.id}` : ""}
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
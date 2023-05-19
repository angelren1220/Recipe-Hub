const DirectionForm = function() {
  return (
    <form
      autoComplete="off"
      onSubmit={event => event.preventDefault()}
    >
      {currentRecipe.directions.map(direction => {
        <>
          <label htmlFor={directionsCount} >Recipe Title:</label>
          <input
            id={directionsCount}
            value={currentRecipe.directions[directionsCount]}
            onChange={(e) => setRecipeDirections(e.target.name, e.target.value)}
            name={directionsCount}
            type="text"
            placeholder={direction}
            required
          />
        </>;
      })}
    </form>

  );
};


export default DirectionForm;
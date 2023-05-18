import { useState, useContext } from "react";
import { viewModeContext } from "../../hooks/providers/viewModeProvider";

const EditRecipeSummary = function(props) {

  const currentRecipe = {
    name: 'How To Cook Dinner',
    description: 'This recipe will teach you how to cook a delicious meal.',
    cooktime_minutes: 2,
    image: 'https://static.wikia.nocookie.net/spongebob/images/2/2f/Krusty_Krab_Training_Video_081.png/revision/latest?cb=20211125123843'
  };

  const [name, setName] = useState(currentRecipe.name);
  const [description, setDescription] = useState(currentRecipe.description);
  const [image, setImage] = useState(currentRecipe.image);
  const [cooktimeMinutes, setCooktime] = useState(currentRecipe.cooktime_minutes);

  const {
    viewMode,
    recipeSummaryView,
    recipeIngredientsView,
    recipeDirectionsView
  } = useContext(viewModeContext);

  const handleEdit = function() {
    console.log("name: ", name, "description: ", description, "img url: ", image);
    //call edit recipe helper function and forward to next edit page
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="name" >Recipe Title:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder={currentRecipe.name}
          required
        />
        <label htmlFor="description" >Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          type="text"
          placeholder={currentRecipe.description}
          required
        />
        <label htmlFor="Cooktime" >Cooktime in minutes:</label>
        <input
          id="cooktime"
          value={cooktimeMinutes}
          onChange={(e) => setCooktime(e.target.value)}
          name="cooktime"
          type="integer"
          placeholder={cooktimeMinutes}
        />
        <label htmlFor="image" >Image:</label>
        <input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          name="image"
          type="url"
          placeholder={currentRecipe.image}
        />
        <button onClick={handleEdit}>Submit</button>
      </form>
      <button >To Ingredients</button>
    </>
  );
};

export default EditRecipeSummary;
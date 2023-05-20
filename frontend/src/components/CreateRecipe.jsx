import { useState } from "react";
import { Link } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";

const CreateRecipe = function(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [cooktimeMinutes, setCooktime] = useState('');
  const loggedIn = (props.userId ? true : false);

  const {
    state,
    createRecipe
  } = useApplicationData();

  const handleCreation = function() {
    const recipe = {
      name,
      user_id: props.userId,
      description,
      cooktime_minutes: cooktimeMinutes,
      image,
      directions: ["Gather ingredients"]
    };

    createRecipe(recipe);
    //link to edit the new recipe^^
  };

  return (
    <>
      {!loggedIn && <Link to='/login'><h1>Log in to create recipes!</h1></Link>}
      {loggedIn &&
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
          placeholder="My Title"
          required
        />
        <label htmlFor="description" >Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          type="text"
          placeholder="Lorem ipsum ..."
          required
        />
        <label htmlFor="Cooktime" >Cooktime in minutes:</label>
        <input
          id="cooktime"
          value={cooktimeMinutes}
          onChange={(e) => setCooktime(e.target.value)}
          name="cooktime"
          type="integer"
          placeholder="15"
        />
        <label htmlFor="imgage" >Image URL:</label>
        <input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          name="image"
          type="url"
          placeholder="www..."
        />
        <button onClick={handleCreation}>Submit</button>
      </form>}
    </>
  );
};

export default CreateRecipe;
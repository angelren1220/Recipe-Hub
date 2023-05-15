import { useState } from "react",

const CreateRecipe = function() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleCreation = function() {
    console.log("name: ", name, "description: ", description, "img url: ", image)
  }

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="title" >Recipe Title:</label>
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
        <label htmlFor="image" >Image:</label>
        <input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          name="image"
          type="url"
          placeholder="www..."
        />
        <button onClick={handleCreation}>Submit</button>
      </form>
    </>
  )
}
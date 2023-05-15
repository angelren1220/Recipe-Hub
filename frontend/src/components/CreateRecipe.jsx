import { useState } from "react",

const CreateRecipe = function() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');


  const handleCreation = function() {
    console.log("title: ", title, "description: ", description, "img url: ", image)
  }

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="title" >Recipe Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setName(e.target.value)}
          name="title"
          type="text"
          placeholder="My Title"
        />
        <label htmlFor="description" >Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setEmail(e.target.value)}
          name="description"
          type="text"
          placeholder="Lorem ipsum ..."
        />
        <label htmlFor="image" >Password:</label>
        <input
          id="image"
          value={image}
          onChange={(e) => setPass(e.target.value)}
          name="image"
          type="url"
          placeholder="www..."
        />
        <button onClick={handleCreation}>Register</button>
      </form>
    </>
  )
}
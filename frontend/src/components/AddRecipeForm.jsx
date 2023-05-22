import { useState } from "react";

const AddRecipeForm = function(props) {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleAddRecipe = function(event) {
    event.stopPropagation();
    const selected_id = selectedBookId || props.userBooks[0]?.id || null;
    console.log("book id", selected_id);
    console.log("recipe id", props.item.id);
    const recipeId = props.item.id;
    props.addRecipe(selected_id, recipeId);
    props.closePopup();
  };
  
  console.log("☮", props.userBooks)

  return (
    <>
      <div className="book-select" onClick={(event) => event.stopPropagation()}>
        <h3>
          <label htmlFor="books">Choose a book to add Recipe to:</label>
        </h3>
        <select
          name="books"
          id="books"
          onChange={(event) => setSelectedBookId(event.target.value)}
        >
          {props.userBooks.map((book) => (
            <option key={book.name} value={book.id}>
              {book.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddRecipe}>Submit</button>
      </div>
    </>
  );
};

export default AddRecipeForm;
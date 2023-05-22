import { useState } from "react";

const AddRecipeForm = function(props) {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleAddRecipe = function() {
    props.closePopup();
  };

  return (
    <>
      <div className="book-select">
        <h3>
          <label htmlFor="books">Choose a book to add Recipe to:</label>
        </h3>
        <select name="books" id="books" onChange={(event) => setSelectedBookId(event.target.value)}>
          {props.userBooks.map((book) => (
            <option key={book.id} value={book.id}>
              {book.name}
            </option>
          ))}
        </select>
        <button onClick={(event) => handleAddRecipe(event, props.item.id)}>Submit</button>
      </div>
    </>
  );
};

export default AddRecipeForm;
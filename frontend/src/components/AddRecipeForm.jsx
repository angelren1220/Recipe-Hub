const AddRecipeForm = function(props) {
  return (
    <div className="book-select">
    <h3><label htmlFor="books">Choose a book to add Recipe to:</label></h3>

    <select name="books" id="books" onChange={(event) => setSelectedBookId(event.target.value)}>
      {props.userBooks.map((book) => (
        <option key={book.id} value={book.id}>
          {book.name}
        </option>
      ))}
    </select>

    <button onClick={(event) => handleAddRecipe(event, item.id, selectedBookId || event.target.value)}>Submit</button>
  </div>
  );
};

export default AddRecipeForm;
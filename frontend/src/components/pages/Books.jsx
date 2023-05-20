import React, { useEffect, useState } from "react";
import BookAccordion from "../BookAccordion";

const Books = function(props) {

  return (
    <article className="books">
      <h1>All of current user's books go here</h1>
      <BookAccordion />
    </article>
  );
};

export default Books;
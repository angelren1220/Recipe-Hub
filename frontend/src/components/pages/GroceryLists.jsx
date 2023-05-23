import React, { useEffect, useState } from "react";
import GrocerylistAccordion from "../GrocerylistAccordion";

const GroceryLists = function(props) {

  return (
    <article className="grocery-lists">
      <h1>ALL Grocerylists go here</h1>
      <GrocerylistAccordion/>
        
    </article>
  );

};

export default GroceryLists;
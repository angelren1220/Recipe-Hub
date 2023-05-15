import React, { useState } from "react";

const Loading = function(props) {
  return (
    <>
      <h1 className="loading">{props.children}...</h1>
    </>
  );
};

export default Loading;
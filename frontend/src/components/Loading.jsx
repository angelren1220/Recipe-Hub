import React, { useState } from "react";

const Loading = function(props) {
  return (
    <>
      <h1 className="loading">{props.children}...</h1>
      <button > Finish Loading</button >
    </>
  );
};

export default Loading;
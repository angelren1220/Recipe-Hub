import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import "../styles/template.scss";

const Template = ({ children }) => {
  return (
    <div className="template">
      <Navigation />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default Template;
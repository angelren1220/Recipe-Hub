import React, { useEffect, useState, useRef } from "react";
import Navigation from "./Navigation";
import TopButton from "./TopButton";
import "../styles/template.scss";

const Template = ({ children }) => {
  const contentContainerRef = useRef(null);

  return (
    <div className="template">
      <Navigation />
      <div className="content-container" ref={contentContainerRef}>
        {children}
      <TopButton contentContainerRef={contentContainerRef} />
      </div>
    </div>
  );
};

export default Template;
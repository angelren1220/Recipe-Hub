import React, { useState, useEffect, useRef } from "react";
import "../styles/top_button.scss";

const TopButton = ({ contentContainerRef }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentContainer = contentContainerRef.current;
      if (contentContainer) {
        const shouldShowButton =
          contentContainer.scrollTop > 200 &&
          contentContainer.scrollHeight > contentContainer.clientHeight;
        setShowButton(shouldShowButton);
      }
    };

    const contentContainer = contentContainerRef.current;
    if (contentContainer) {
      contentContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentContainer) {
        contentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [contentContainerRef]);

  const scrollToTop = () => {
    const contentContainer = contentContainerRef.current;
    if (contentContainer) {
      contentContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={`top-button ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      Top &#x2191;
    </button>
  );
};

export default TopButton;

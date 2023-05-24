import React, { useState, useRef, useEffect } from "react";
import '../styles/popup.scss';

export default function Popup(props) {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);

  const handlePopup = function(event) {
    event.stopPropagation();
    setShowPopup(!showPopup);
  };

  const closePopup = function() {
    setShowPopup(false);
  };

  const handleOutsideClick = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="generic-popup">
      <button onClick={(event) => handlePopup(event)}>{props.popupMessage}</button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form" ref={formRef}>
            <div className="popup-content">
              {showPopup && React.Children.map(props.children, child => {
                return React.cloneElement(child, { ...props, closePopup });
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

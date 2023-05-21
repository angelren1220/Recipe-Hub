import React, { useState, useRef, useEffect } from "react";
import '../styles/popup.scss';

// Popup takes a special prop called popupMessage
// popupMessage is used to set the contents of the popup trigger button
export default function Popup(props) {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);

  const handlePopup = function() {
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
      <button onClick={handlePopup}>{props.popupMessage}</button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form"  ref={formRef}>
            {showPopup && React.Children.map(props.children, child => {
              return React.cloneElement(child, { ...props });
            })}
            <button onClick={closePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
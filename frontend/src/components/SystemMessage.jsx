import React, { useEffect, useState } from "react";
import "../styles/system_message.scss";

const SystemMessage = ({ show, message, type, onShowMessage }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);

      const timeout = setTimeout(() => {
        setIsVisible(false);
        if (onShowMessage) {
          onShowMessage();
        }
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [show, onShowMessage]);

  return (
    <div className={`system-message ${isVisible ? "visible" : ""}`}>
      <div className={`message ${type}`}>{message}</div>
    </div>
  );
};

export default SystemMessage;


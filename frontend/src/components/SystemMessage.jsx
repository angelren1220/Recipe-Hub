import React, { useEffect, useState } from "react";
import "../styles/system_message.scss";

const SystemMessage = ({ show, message, type }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);

      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div className={`system-message ${isVisible ? "visible" : ""}`}>
      <div className={`message ${type}`}>{message}</div>
    </div>
  );
};

export default SystemMessage;


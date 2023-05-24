import React, { useEffect, useState } from "react";

const SuccessMessage = ({ show }) => {
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

  return isVisible ? (
    <div className="success-message">Added successfully!</div>
  ) : null;
};

export default SuccessMessage;

import React, { useEffect, useState } from "react";

const SystemMessage = ({  show, message, type  }) => {
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
    <div className={`${type}-message`}>{message}</div>
  ) : null;
};

export default SystemMessage;

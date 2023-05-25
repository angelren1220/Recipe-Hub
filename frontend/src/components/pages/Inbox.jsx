import React, { useEffect, useState } from "react";
import MessageAccordion from "../MessageAccordion.jsx";
import useApplicationData from "../../hooks/useApplicationData";

const Inbox = function(props) {
  const {
    state,
    deleteMessage,
    getMessagesByUserID,
  } = useApplicationData();

  const [showReceivedMessages, setShowReceivedMessages] = useState(true); // Define the showReceivedMessages state variable

  useEffect(() => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    getMessagesByUserID(userId);
  }, []);

  const handlesReceivedMessages = () => {
    setShowReceivedMessages(true);
  };

  const handlesSentMessages = () => {
    setShowReceivedMessages(false);
  };

  // Filter the messages based on the toggle state and current user id
  const filteredMessages = state.messages.filter((message) => {
    const userId = parseInt(localStorage.getItem('userId'), 10); // localStorage always returns a string!
    if (showReceivedMessages) {
      // Show received messages where recipient_id is equal to the current user id
      return message.recipient_id === userId;
    } else {
      // Show sent messages where sender_id is equal to the current user id
      return message.sender_id === userId;
    }
  });

  return (
    <article className="inbox">
      <div>
        <button onClick={handlesReceivedMessages} disabled={showReceivedMessages}>
          Received
        </button>
        <button onClick={handlesSentMessages} disabled={!showReceivedMessages}>
          Sent
        </button>
      </div>
      <MessageAccordion
        messages={filteredMessages}
        deleteMessage={deleteMessage}
        showReceivedMessages={showReceivedMessages}
      />
    </article>
  );
};

export default Inbox;
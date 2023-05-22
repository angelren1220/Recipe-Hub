import React, { useEffect, useState } from "react";
import MessageAccordion from "../MessageAccordion.jsx";
import useApplicationData from "../../hooks/useApplicationData";

const Inbox = function(props) {
  
  const {
    state,
    deleteMessage,
    getMessagesByUserID,
  } = useApplicationData();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getMessagesByUserID(userId);
  }, []);

  const handlesMessagesToggle = () => {
    setShowBookmarks((prevShowBookmarks) => !prevShowBookmarks);
  };

  return (
    <article className="inbox">
      <h1>All of the current user's messages go here</h1>
      <button onClick={handlesMessagesToggle}>Received</button>
      <button onClick={handlesMessagesToggle}>Sent</button>
        <MessageAccordion
        state ={state}
        messages={state.messages}
        deleteMessage={deleteMessage}
        />
    </article>

  );
};

export default Inbox;
import React, { useEffect, useState } from "react";
import MessageAccordion from "../MessageAccordion.jsx";
import useApplicationData from "../../hooks/useApplicationData";

const Inbox = function(props) {
  
  // const {
  //   state,
  //   deleteMessage
  // } = useApplicationData();

  // useEffect(() => {
  //   const userId = localStorage.getItem('userId');
  //   getMessages(userId);
  // }, []);

  const handlesMessagesToggle = () => {
    setShowBookmarks((prevShowBookmarks) => !prevShowBookmarks);
  };

  return (
    <article className="inbox">
      <h1>All of the current user's messages go here</h1>
      <button onClick={handlesMessagesToggle}></button>
        <MessageAccordion
        />
    </article>

  );
};

export default Inbox;
import React, { useState } from "react";
import "../styles/send_link_form.scss";

const SendLinkForm = ({ subjectType, subjectId, onClose }) => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the link to the recipient based on the subjectType and subjectId
    // Implement your logic here, such as making an API request

    // Close the form
    onClose();
  };

  return (
    <div className="popup-form">
      <h3>Send Link</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <button type="submit">Send</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SendLinkForm;
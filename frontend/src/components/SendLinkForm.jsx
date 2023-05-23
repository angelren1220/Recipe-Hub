import React, { useState, useEffect, useRef } from "react";
import "../styles/send_link_form.scss";

const SendLinkForm = ({ subjectType, subjectId, onClose, createMessage }) => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      subject_type: subjectType,
      subject_id: subjectId,
      sender_id: userId,
      recipient_id: recipient,
      message: message,
    };

    createMessage(newMessage);
    setMessage(""); // reset form after submit
    onClose();
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChangeRecipient = (event) => {
    setRecipient(event.target.value);
  };

  const handleOutsideClick = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="popup-form" ref={formRef}>
      <h3>Share this {subjectType === 'GroceryList' ? 'Grocery List' : subjectType}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipient">Recipient ID:</label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={handleChangeRecipient}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleChange}
          autoFocus
          placeholder="(Write anything you want to the recipient, let's keep it PG-13 please)"
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

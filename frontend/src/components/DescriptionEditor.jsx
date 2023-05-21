import React, { useState, useRef, useEffect } from "react";
import "../styles/description_editor.scss";

const DescriptionEditor = ({ initialDescription, onSave, onCancel }) => {
  const [editedDescription, setEditedDescription] = useState(initialDescription);
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }, []);

  const handleSave = async (event) => {
    event.stopPropagation();
    setIsLoading(true);

    // Simulate an asynchronous API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSave(editedDescription);
    setIsLoading(false);
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    onCancel();
  };

  const handleChange = (event) => {
    event.stopPropagation();
    setEditedDescription(event.target.value);
    adjustTextareaHeight();
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="description-editor">
      {isLoading && <div className="loading-state">Loading...</div>}
      <textarea
        ref={textareaRef}
        value={editedDescription}
        placeholder={initialDescription}
        onChange={handleChange}
        onClick={handleClick}
        rows={1}
      />
      <div className="control-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DescriptionEditor;
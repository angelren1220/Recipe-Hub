// UnreadMessagesContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UnreadMessagesContext = createContext();

export const UnreadMessagesProvider = ({ children }) => {
  const [unreadMessages, setUnreadMessages] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUnreadMessagesByUserID = (userId) => {
    if (!userId) {
      return Promise.resolve();
    }

    return axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        const filteredMessages = response.data.messages.filter((message) => {
          return (
            (userId === message.recipient_id && message.recipient_deleted === false) ||
            (userId === message.sender_id && message.sender_deleted === false)
          );
        });

        const unreadMessages = filteredMessages.filter((message) => {
          return (
            message.recipient_id === userId &&
            !message.read
          );
        });

        const unreadMessagesCount = unreadMessages.length;

        setUnreadMessages(unreadMessagesCount);

        console.log("filteredMessages:", filteredMessages);
        console.log("unreadMessages:", unreadMessages);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  };

  useEffect(() => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    if (userId) {
      getUnreadMessagesByUserID(userId)
        .then(() => {
          setLoading(false); // Set loading to false when messages are fetched
        });
    } else {
      setLoading(false); // Set loading to false when userId is not available
    }
  }, []);


  // Updated to make put request, no need to set the state after
  const updateReadMessage = (messageId, payload) => {
    return axios
      .put(`api/messages/${messageId}/mark_as_read`, payload)
      .then((response) => {
        console.log("UPDATE TO READ:", response.data);
  
        // Reduce the number of unread messages by 1
        setUnreadMessages((prevUnreadMessages) => prevUnreadMessages - 1);
      })
      .catch((error) => {
        console.error('Error updating message read status:', error);
      });
  };

  return (
    <UnreadMessagesContext.Provider value={{ unreadMessages, setUnreadMessages, updateReadMessage, getUnreadMessagesByUserID, loading }}>
      {children}
    </UnreadMessagesContext.Provider>
  );
};

export default UnreadMessagesContext;
import "../styles/nav.scss";
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useApplicationData from "../hooks/useApplicationData";
import UnreadMessagesContext from "../hooks/providers/UnreadMessagesProvider";

const Navigation = function() {
  const userId = parseInt(localStorage.getItem('userId'), 10);
  
  const {
    state,
    getUserById,
  } = useApplicationData();

  const { unreadMessages, getUnreadMessagesByUserID, loading } = useContext(UnreadMessagesContext)

  useEffect(() => {
    if(userId){
        getUserById(userId);
        getUnreadMessagesByUserID(userId);
      }
  }, [userId]);

  const { user } = state;

  return (
    <nav className="nav">
      <h1 className="logo"><a href="/">Sous</a></h1>
      <div className="sideview">

        <div className="welcome-msg">
            {!userId && <h2><Link to={'/login'}>Login</Link></h2>}
            {!userId && <h2><Link>Hello</Link></h2>}
            {userId &&
              <h2><Link to={`/profile/${user.id}`}>
                Hello, {user.first_name}
              </Link> </h2>}
            {unreadMessages && unreadMessages > 0 && <span>You have {unreadMessages} unread messages!</span>}
        </div>
        
        <h2><Link to={'/recipes'}>My Recipes</Link></h2>
        <h2><Link to={'/books'}>My Books</Link></h2>
        <h2><Link to={'/grocerylists'}>Grocery Lists</Link></h2>
        <h2><Link to={'/explore'}>Explore</Link></h2>
        <h2><Link to={'/search'}>Search</Link></h2>
        <h2><Link to={'/inbox'}>Inbox</Link></h2>
      </div>
    </nav>
  );
};

export default Navigation;
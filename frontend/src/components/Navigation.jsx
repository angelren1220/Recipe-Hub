import "../styles/nav.scss";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import useApplicationData from "../hooks/useApplicationData";

const Navigation = function() {
  const userId = localStorage.getItem('userId');
  const {
    state,
    logoutUser,
    getUserById,
  } = useApplicationData();

  useEffect(() => {
    if (userId) {
      getUserById(userId);
    }
  }, []);

  const { user } = state;

  const handleLogout = () => {
    return logoutUser();
  };

  return (
    <nav className="nav">

      <h1 className="logo"><a href="/">Sous</a></h1>

      <div className="sideview">
        {!userId && <h2><Link to={'/login'}>Login</Link></h2>}
        {userId &&
          <h2><Link to={`/profile/${user.id}`}>
            Hello, {user.first_name}
          </Link> </h2>}
        {userId &&
          <button onClick={handleLogout}>Logout</button>}
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
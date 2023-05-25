import "../styles/login_register_button.scss";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import useApplicationData from "../hooks/useApplicationData";

const LoginRegisterButton = function() {

  const userId = localStorage.getItem('userId');
  const {
    state,
    logoutUser,
  } = useApplicationData();

  const { user } = state;

  const handleLogout = () => {
    return logoutUser();
  };

  return (
    <div className="button-sideview">
      {!userId && <button><Link to={'/login'}>Login</Link></button>}
      {!userId && <button><Link to={'/register'}>Register</Link></button>}
      {userId &&
        <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default LoginRegisterButton;
import { useState, useContext } from "react";
import { viewModeContext } from "../hooks/providers/viewModeProvider";

import { Link } from 'react-router-dom';

import useApplicationData from "../hooks/useApplicationData";
import SystemMessage from "./SystemMessage";
import "../styles/forms";

const LoginForm = function() {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const { registerView } = useContext(viewModeContext);

  const {
    state,
    loginUser
  } = useApplicationData();

  const handleLogin = () => {

    const user = { email, password };
    loginUser(user);

  };

  const { errorMessage } = state;

  const handleShowMessage = () => {

  };


  return (
    <div className="form-page-container">
      <form
        className="form-container"
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="email" >Email:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="yourEmail@mailProvider.com"
        />
        <label htmlFor="password" >Password:</label>
        <input
          id="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          name="password"
          type="password"
          placeholder="************"
        />
        <button className="btn btn-primary" onClick={handleLogin}>Log In</button>

      </form>
      <div className="link-container" >
        <Link className="link-container" to="/register"> Don't have an account? Register here!</Link>
      </div>



      <SystemMessage
        show={errorMessage}
        message={errorMessage}
        type="error"
        onShowMessage={handleShowMessage} />
    </div>


  );
};

export default LoginForm;
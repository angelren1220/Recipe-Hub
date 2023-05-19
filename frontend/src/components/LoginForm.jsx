import { useState, useContext } from "react";
import { viewModeContext } from "../hooks/providers/viewModeProvider";

import { Link } from 'react-router-dom';

import useApplicationData from "../hooks/useApplicationData";

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
    return loginUser(user);

  };

  return (
    <>
      <form
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
        <button onClick={handleLogin}>Log In</button>

      </form>

      <button>
        <Link to="/register"> Don't have an account? Register here!</Link>
      </button>
    </>


  );
};

export default LoginForm;
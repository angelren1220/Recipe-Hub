import { useState, useContext } from "react";

import { viewModeContext } from "../hooks/providers/viewModeProvider";

const Login = function(props) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const { viewMode, loginView, registerView, recipesView, loadingView } = useContext(viewModeContext);

  const handleLogin = () => {
    console.log("email: ", email, "password: ", pass);
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
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name="password"
          type="password"
          placeholder="************"
        />
        <button onClick={handleLogin}>Log In</button>
      </form>
      <button onClick={registerView}>Don&apos;t have an account? Register here!</button>
    </>

  );
};

export default Login;
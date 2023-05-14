import React, { useState } from "react";

const Login = function() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    event => event.preventDefault();
    console.log("email: ", email, "password: ", pass);
  };


  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleLogin}
      >
        <label for="email" >Email:</label>
        <input
          id="email"
          value={email}
          name="email"
          type="email"
          placeholder="yourEmail@mailProvider.com"
        />
        <label for="password" >Password:</label>
        <input
          id="password"
          value={pass}
          name="password"
          type="password"
          placeholder="************"
        />
        <button>Log In</button>
      </form>
      <button>Don't have an account? Register here!</button>
    </>

  );
};

export default Login;
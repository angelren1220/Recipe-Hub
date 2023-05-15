import React, { useState } from "react";

const Login = function(props) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
        <button>Log In</button>
      </form>
      <button >Don&apos;t have an account? Register here!</button>
    </>

  );
};

export default Login;
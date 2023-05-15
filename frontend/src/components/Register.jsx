import { useState, useContext } from "react";
import { viewModeContext } from "../hooks/providers/viewModeProvider";

const Register = function() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const { viewMode, loginView, registerView, recipesView, loadingView } = useContext(viewModeContext);

  const handleRegister = function() {
    console.log("name", name, "email: ", email, "password: ", pass);
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="name" >Full Name:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="Full Name"
        />
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
        <button onClick={handleRegister}>Register</button>
      </form>
      <button onClick={loginView}>Already have an account? Login here!</button>
    </>
  );
};

export default Register;
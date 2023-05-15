import { useState, useContext } from "react";
import { viewModeContext } from "../hooks/providers/viewModeProvider";

const Register = function() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { viewMode, loginView, registerView, recipesView, loadingView } = useContext(viewModeContext);

  const handleRegister = function() {
    console.log("first name", first_name, "last name", last_name, "email: ", email, "password: ", password, "password confirmation: ", passwordConfirmation);

  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="first_name" >First Name:</label>
        <input
          id="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="first_name"
          type="text"
          placeholder="First Name"
          required
        />
        <label htmlFor="last_name" >Last Name:</label>
        <input
          id="laast_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          name="last_name"
          type="text"
          placeholder="Last Name"
          required
        />
        <label htmlFor="email" >Email:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="yourEmail@mailProvider.com"
          required
        />
        <label htmlFor="password" >Password:</label>
        <input
          id="password"
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="******"
          required
          minLength={6}
        />
        <label htmlFor="passwordConfirmation" > Confirm Password:</label>
        <input
          id="passwordConfirmation"
          value={pass}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          name="passwordConfirmation"
          type="passwordConfirmation"
          placeholder="******"
          required
          minLength={6}
        />
        <button onClick={handleRegister}>Register</button>
      </form>
      <button onClick={loginView}>Already have an account? Login here!</button>
    </>
  );
};

export default Register;
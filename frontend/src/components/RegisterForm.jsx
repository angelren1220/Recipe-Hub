import { useState, useContext } from "react";
import { viewModeContext } from "../hooks/providers/viewModeProvider";
import bcrypt from "bcryptjs";
import useApplicationData from "../hooks/useApplicationData";
import { Link } from 'react-router-dom';

const RegisterForm = function() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const {
    state,
    createUser
  } = useApplicationData();

  const { loginView } = useContext(viewModeContext);

  const handleRegister = function() {

    if (password === passwordConfirmation) {
      const user = { first_name: firstName, last_name: lastName, email, password: password };
      return createUser(user);
    }
    alert('Passwords must match!');
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="firstName" >First Name:</label>
        <input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
          type="text"
          placeholder="First Name"
          required
        />
        <label htmlFor="lastName" >Last Name:</label>
        <input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
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
          value={password}
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
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          name="passwordConfirmation"
          type="password"
          placeholder="******"
          required
          minLength={6}
        />
        <button onClick={handleRegister}>Register</button>
      </form>

      <button>
        <Link to="/login"> Already have an account? Login here!</Link>
      </button>
    </>
  );
};

export default RegisterForm;
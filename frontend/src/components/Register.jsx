import { useState, useContext } from "react";
import { viewModeContext } from "../hooks/providers/viewModeProvider";
import useApplicationData from "../hooks/useApplicationData";
const Register = function() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const {
    state,
    createUser
  } = useApplicationData();

  const { viewMode, loginView, registerView, recipesView, loadingView } = useContext(viewModeContext);

  const handleRegister = function() {
    // console.log("name", firstName, "email: ", email, "password: ", pass);

    // the key in user object should be exactly the same in database
    const user = {first_name: firstName, last_name: lastName, email, password: pass};
    createUser(user);
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <label htmlFor="name" >First Name:</label>
        <input
          id="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="name"
          type="text"
          placeholder="Full Name"
        />
        <label htmlFor="name" >Last Name:</label>
        <input
          id="name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
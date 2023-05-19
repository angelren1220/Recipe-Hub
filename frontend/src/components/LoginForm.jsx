import { useState, useContext } from "react";
import { viewModeContext } from "../hooks/providers/viewModeProvider";
import bcrypt from "bcryptjs";
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
    // const getHashedPassword = "$2a$10$8Be1QsGuEtN.RZCTEf.AMeG2TrGTGaxhfnUAS7LKuTV929enLsRke";

    // bcrypt.compare(password, getHashedPassword, function(err, isMatch) {
    //   if (err) {
    //     throw err;
    //   }
    //   if (isMatch) {
    //     console.log("🧠 Password Matches! 🧠");
    //   }
    //   if (!isMatch) {
    //     console.log("Password doesn't match!");
    //   }
    // });

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
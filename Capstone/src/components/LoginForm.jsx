import React from 'react';
import './styles/login.css'; // Importing the CSS file

const LoginForm = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form action="#">
        <label htmlFor="userName">Email
          <input type="text" name="userName" id="userName" required />
        </label>
        <br /><br />
        <label htmlFor="password">Password
          <input type="password" name="password" id="password" />
        </label>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginForm;
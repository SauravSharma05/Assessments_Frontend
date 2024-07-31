import React, { useContext } from 'react';
import Appcontext from './Appcontext';


function LoginForm() {
  const {theme, username, password, setUsername, setPassword, handleLogin } = useContext(Appcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={handleSubmit} className={`login-form ${theme}`}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
      <button type="submit" className='log'>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
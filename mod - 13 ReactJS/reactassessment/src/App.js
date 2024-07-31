import React, { useState } from 'react';
import './App.css';
import Appcontext from './Appcontext';
import LoginForm from './Loginform';
import ThemeToggle from './ThemeToggle';




function App() {
  const [theme, setTheme] = useState('light');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const contextValue = {
    theme,
    toggleTheme,
    isLoggedIn,
    username,
    password,
    setUsername,
    setPassword,
    handleLogin,
    handleLogout,
    toggleTheme
  };

  return (
    <Appcontext.Provider value={contextValue}>
      <LoginForm />
      <ThemeToggle />
    </Appcontext.Provider>
    
  );
}

export default App;
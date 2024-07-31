import React, { useContext } from 'react';
import Appcontext from './Appcontext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(Appcontext);

  return (
    <button className='theme' onClick={toggleTheme}>
      Toggle {theme} theme
    </button>
  );
};

export default ThemeToggle;
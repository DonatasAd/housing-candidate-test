import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState( window.localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <Todo />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

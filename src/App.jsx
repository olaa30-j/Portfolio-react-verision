// import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import MainView from './views/MainView';
import { RouterConfig } from './router.config';
import { useEffect, useState } from 'react';
import './App.css';
import { ModeProvider } from './context/darkmode';
import { ThemeProvider } from './context/theme';

function App() {
  const [theme, setTheme] = useState('#2F3C7E');
  const [mode, setMode] = useState('light');

  useEffect(() => {
    setStoredTheme();
    setStoredMode();
  }, []);

  const setStoredTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme ? storedTheme : '#2F3C7E');
    document.documentElement.style.setProperty('--main-color', storedTheme || '#2F3C7E');
  };

  const setStoredMode = () => {
    const storedMode = localStorage.getItem('mode');
    setTheme(mode == storedMode);
    document.body.classList.add(storedMode);
  };

  const handleDarkMode = () => {
    setMode((prevMode) => {
      if (prevMode === 'dark') {
        localStorage.setItem('mode', 'light');
        document.body.classList.remove('dark');
        document.body.classList.add('light');      
        return 'light';
      } else {
        localStorage.setItem('mode', 'dark');
        document.body.classList.remove('light');
        document.body.classList.add('dark');      
        return 'dark'; 
      }
    });
  };

  const handleTheme = (newTheme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme); 
    document.documentElement.style.setProperty('--main-color', newTheme);
  };

  return (
    <>
      <ThemeProvider value={{ theme, handleTheme }}>
        <ModeProvider value={{ mode, handleDarkMode }}>
          <RouterProvider router={RouterConfig}>
            <MainView />
          </RouterProvider>
        </ModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

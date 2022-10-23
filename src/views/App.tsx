import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles, HomePage, NavBar } from './';

import { darkTheme, lightTheme } from 'shared/styles/Theme';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [theme, setTheme] = useState('ligth');

  useEffect(() => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <NavBar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

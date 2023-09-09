import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { ContentLayout } from 'shared/components/Layouts';
import { darkTheme, lightTheme } from 'shared/styles/Theme';
import { GlobalStyles, Home, SignIn } from 'views';

export default function App() {
  const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
  //     ? 'dark'
  //     : 'light';
  //   setTheme(theme);
  //   window.localStorage.setItem('theme', theme);
  // }, []);

  useEffect(() => {
    const currentTheme = JSON.parse(window.localStorage.getItem('currenteme')!);
    if (currentTheme) setTheme(currentTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Routes>
        <Route element={<ContentLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<div>test</div>} />
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

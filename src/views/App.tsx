import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

import { darkTheme, lightTheme } from 'shared/styles/Theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, Header, Home, NavBar, SignIn } from 'views';

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

  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    background: rgba(150, 150, 150, 0.3);
    backdrop-filter: blur(50px);
  `;

  const Content = styled.div`
    width: 100%;
    width: 100%;

    flex: 1;

    display: flex;
    flex-direction: row;
  `;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <Header />
        <Content>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<SignIn />} />
          </Routes>
        </Content>
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

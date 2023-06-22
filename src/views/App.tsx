import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { darkTheme, lightTheme } from 'shared/styles/Theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, Header, Home, NavBar } from 'views';

export default function App() {
  const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
  //     ? 'dark'
  //     : 'light';
  //   setTheme(theme);
  //   window.localStorage.setItem('theme', theme);
  // }, []);

  const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
  `;

  const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;

    height: 100%;
    padding-top: 5vh;
  `;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <Header />
        <Content>
          <NavBar />

          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Content>
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

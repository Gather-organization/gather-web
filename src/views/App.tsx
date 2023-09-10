import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { ContentLayout } from 'shared/components/Layouts';
import { useTheme } from 'shared/hooks';
import { darkTheme, lightTheme } from 'shared/styles/Theme';
import { GlobalStyles, Home, SignIn } from 'views';

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
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

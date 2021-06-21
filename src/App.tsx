import React from 'react';
import { TestComponent } from './components/TestComponent';
import { theme } from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppContainer>
      <TestComponent name={`Hello world!`} />
    </AppContainer>
  </ThemeProvider>
);

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default App;

import React from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset';
import { Box } from 'rebass';
import Manager from './layout/Manager';

function App(props) {
  return (
    <ThemeProvider theme={theme}>
        <Box maxWidth='700px' margin='0 auto'>
          <Manager />
        </Box>
    </ThemeProvider>
  );
}

export default App;
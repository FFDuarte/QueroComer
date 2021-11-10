import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './pages/Home'
import { Reset } from 'styled-reset'; 
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <Reset />
        <Home></Home>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

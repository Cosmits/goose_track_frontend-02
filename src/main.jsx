//HSamofal 
import './index.css';
// import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider, useSelector } from 'react-redux';
import { persistor, store } from '/src/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import { selectTheme } from './redux/theme/themeSlice';
import { darkTheme, lightTheme } from './Styles/theme';

import { GlobalStyle } from './Styles/GlobalStyles';

import App from './App.jsx';
import Loader from './components/MainLayout/Loader/Loader';


function ThemeWrapper() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter basename="/goose_track_frontend-02">
          <ThemeWrapper />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>,
);

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'core';
import RTL from 'configs/rtl/rtL';
import Layout from 'infrastructure/layout/Layout';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'store/store';
import { useEffect } from 'react';

export default function App() {
  const customTheme = createTheme(theme);
  let persistor = persistStore(store);
    useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(function(registration) {
        if (registration) {
          console.log('Service Worker فعال است:', registration);
        } else {
          console.log('Service Worker غیرفعال است.');
        }
      }).catch(function(error) {
        console.log('خطا در دریافت وضعیت Service Worker:', error);
      });
    } else {
      console.log('Service Worker پشتیبانی نمی‌شود.');
    }
  }, []);
  return (
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RTL>
            <Router>
              <Layout />
            </Router>
          </RTL>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

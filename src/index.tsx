import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from 'app';
import "./i18n"
import CssBaseline from '@mui/material/CssBaseline';
import 'assets/css/app.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <CssBaseline/>
    <App/>
  </>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

serviceWorkerRegistration.register();




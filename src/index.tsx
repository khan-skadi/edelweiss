import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/app/App';

import theme from './theme/theme';
import './index.css';

// fonts
import './assets/fonts/BacktrackRegular.ttf';
import './assets/fonts/StonyIsland.ttf';
import './assets/fonts/TheFrontman.ttf';
import './assets/fonts/Barlow.ttf';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

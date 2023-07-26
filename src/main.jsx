import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './services/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <provider store={ store }>
      <App />
    </provider>
  </React.StrictMode>,
);

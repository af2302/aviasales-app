import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import AviasalesApiService from './services/aviasalesApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
    const res = new AviasalesApiService();
    console.log(res.getDataFromServer());
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


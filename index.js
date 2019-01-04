import React from 'react';
import { render } from 'react-dom';

import App from './components/App/index';

import data from './data.json';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(() => console.log('Service worker is registered'));
}

render(
  <App data={data} />,
  document.getElementById('cv'),
);

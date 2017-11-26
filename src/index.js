import 'aframe';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'; // eslint-disable-line
import { domBinder } from './utils';
import { store } from './modules/store';

var extras = require('aframe-extras');
// extras.physics.registerAll();

require('aframe-physics-system');
require('aframe-orbit-controls-component-2');
require('aframe-effects');

if (typeof Raven !== 'undefined') {
  Raven.config('https://acd51c75672043ae8537f2d101d37daa@sentry.io/241435').install(); // eslint-disable-line
}

export const run = selector => () =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    domBinder(document)(selector),
  );

document.addEventListener(
  'DOMContentLoaded',
  run('#root'),
);

export default run;

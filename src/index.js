import 'aframe';
import 'aframe-physics-system';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App'; // eslint-disable-line
import { domBinder } from './utils';
import { store } from './modules/store';

require('aframe-effects');

export const run = selector => () =>
  render(
    <Provider store={store} >
      <App />
    </Provider>,
    domBinder(document)(selector),
  );

document.addEventListener(
  'DOMContentLoaded',
  run('#root'),
);

export default run;

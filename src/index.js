import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/containers/WeatherApp';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './views';

import reducers from './reducers';
let store = createStore(reducers);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './views';

import reducers from './reducers';
let store = createStore(reducers);

import {setProfilName,incProfilCpt} from './actions/profil.js';
store.dispatch(setProfilName("My name"));
store.dispatch(incProfilCpt());

ReactDOM.render(
   <Provider store={store}>
     <App /></Provider>,
  document.getElementById('app')
);

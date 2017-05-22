import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Sio from 'socket.io-client';

import App from './views';

import reducers from './reducers';
let store = createStore(reducers);

import {setProfilName,incProfilCpt} from './actions/profil.js';
store.dispatch(setProfilName("My name"));
store.dispatch(incProfilCpt());

import {setConnected,newMessage} from './actions/sio.js';
let socket = Sio.connect();
socket.on('connect', () => {
  store.dispatch(setConnected(1));
    console.log("connected to Sockect io");
});

socket.on('MSG', (data) => {
    store.dispatch(newMessage(data));
});

let send_msg= (msg)=>{
  console.log("send message");
  socket.emit('MSG',{content:msg});
}


//Render
ReactDOM.render(
   <Provider store={store}>
     <App sendMessage={send_msg}/></Provider>,
  document.getElementById('app')
);

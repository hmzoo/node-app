import {combineReducers} from 'redux';
import profil from './profil.js';
import sio from './sio.js';

const rootReducer = combineReducers({profil,sio});

export default rootReducer;

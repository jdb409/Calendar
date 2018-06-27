import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import events from './events'

const reducer = combineReducers({events});

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))

const store = createStore(reducer, middleware);

export default store;
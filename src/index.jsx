import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import flatsReducer from './reducers/flat_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

const root = document.getElementById('root');
ReactDOM.render(
        <Provider store={createStore(reducers, {}, middlewares)}>
          <App />
        </Provider>, 
        root);
  

import React from 'react';
import ReactDOM from 'react-dom';
//  import createStore method from redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import Porvider component from react-redux
import { Provider } from 'react-redux';
// an middleware helps debugger
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import the reducer
import { searchRobots, requestRobots } from './reducers'

import App from './containers/App';

import './index.css';

import * as serviceWorker from './serviceWorker';
import 'tachyons';

const logger = createLogger(); 

// create store with reducer,combine 2 reducers to 1 root  
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))


ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));

serviceWorker.register();

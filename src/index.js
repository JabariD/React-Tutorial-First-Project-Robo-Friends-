import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './containers/App.js';

// import App from './App'; --> assumes that it is JS
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// import Redux here
import { Provider } from 'react-redux';
// import Store
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import logger
import { createLogger } from 'redux-logger'


// for async: https://www.digitalocean.com/community/tutorials/redux-redux-thunk
import thunkMiddleware from 'redux-thunk';

// import searchRobots to be used for reducers
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});
// Create the store for Redux
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))



// App can be changed too: <h1>Hello</h1>
ReactDOM.render( 
        <Provider store={store}>
                <App/>
        </Provider>
        , document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
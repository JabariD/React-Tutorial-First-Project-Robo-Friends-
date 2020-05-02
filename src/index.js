import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './containers/App.js';

// import App from './App'; --> assumes that it is JS
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// App can be changed too: <h1>Hello</h1>
ReactDOM.render( 
        <App/>
        , document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
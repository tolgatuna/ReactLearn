import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';

import App from './components/App';
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware()))}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

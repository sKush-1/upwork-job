import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/common.css';
import './styles/reset.css';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

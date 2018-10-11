import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './App';
import Login from './components/Login';
import rootSaga from './rootSaga';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

import {Route, BrowserRouter } from 'react-router-dom';

const initialState = {
  characters: {items:[]}
};

const store = configureStore(initialState);
store.runSaga(rootSaga);

const app = (
 <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

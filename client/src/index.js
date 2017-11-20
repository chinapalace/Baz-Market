import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//inititializes the Redux store- first argument are our reducers- second is initial state- third is middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// renders our App to the dom at the #root element in index.html
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

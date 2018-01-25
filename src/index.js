import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);





ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './cart/reducers/configureStore';
import ShoppingCart from './cart/containers/ShoppingCart';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ShoppingCart />
  </Provider>,
  document.getElementById('root')
);

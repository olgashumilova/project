import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App.tsx';
import { Provider } from 'react-redux';
import reportWebVitals from '@/reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../src/redux/reducers/redusers.ts'

ReactDOM.render(
  <Provider store = {createStore(reducer,applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

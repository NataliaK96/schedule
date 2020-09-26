<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { scheduleReducer } from './redux/scheduleReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { scheduleReducer } from './redux/scheduleReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import "antd/dist/antd.css";
>>>>>>> d07fc0cb6cc4fdc6e0d2d3785c379aaeff9b3ac1

const store = createStore(
  scheduleReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <App />
=======
      <App />
>>>>>>> d07fc0cb6cc4fdc6e0d2d3785c379aaeff9b3ac1
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()

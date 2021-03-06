import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Websocket from './websocket/Websocket';
import Auth from "./store/auth";
import Errors from "./store/errors";
import Users from './store/users';
import './styles/index.css';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    auth: new Auth(),
    users: new Users(),
    errors: Errors,
  }}>
    <App />
    <Websocket/>
  </Context.Provider>,
  document.getElementById('root')
);
  
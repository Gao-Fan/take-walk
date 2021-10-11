import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// 路由使用 history模式
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 路由采用 hash模式
// import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route component={App}></Route>
  </Router>
, document.getElementById('root'));

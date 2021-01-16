import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './stylus/index.less';
// import IRouter from './Router/router.js';
import reportWebVitals from './reportWebVitals';
import Admin from './pages/admin/admin.jsx';

ReactDOM.render(
  <Fragment>
    <Admin />
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

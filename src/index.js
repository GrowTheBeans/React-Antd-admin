import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './stylus/reset.less';
import './stylus/base.less';
// import App from './App';
import Ddmin from './pages/admin/admin.jsx'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Fragment>
    <Ddmin/>
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

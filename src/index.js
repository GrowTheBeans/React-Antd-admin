import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './stylus/reset.less';
import './stylus/base.less';
// import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import TopNavHeader from './pages/TopNavHeader/index.jsx'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <TopNavHeader />
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

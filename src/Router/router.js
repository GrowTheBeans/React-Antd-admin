import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../App.js';
import Amian from '../pages/admin/admin.jsx';
import Login from '../pages/login/login.jsx';
import Exception404 from '../pages/Exception/404.jsx';
let history = createBrowserHistory();
class IRouter extends Component {
  render() {
    return (
      <Router className="router_containers" history={history}>
        <App>
          <Route exact path="/">
            <Amian />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Exception404/>
          </Route>
        </App>
      </Router>
    )
  }
}
export default IRouter;

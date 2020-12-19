import React, { Component } from 'react';
import App from '../App.js';
import Amian from '../pages/admin/admin.jsx';
import Home from '../pages/home/home.jsx';
import Login from '../pages/login/login.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class IRouter extends Component {
  render() {
    return (
      <Router className="router_containers">
        <App>
          <Route exact path="/">
            <Amian />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </App>
      </Router>
    )
  }
}
export default IRouter;

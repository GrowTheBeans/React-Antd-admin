import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/home/home.jsx';
import Login from '../pages/login/login.jsx';
// import Button from '../pages/AntComponents/UI/Buttons/button.jsx';
// import Exception404 from '../pages/Exception/404.jsx';
let history = createBrowserHistory();
class IRouter extends Component {
  render() {
    return (
      <Router className="router_containers" history={history}>123
        {/*<App>*/}
        {/*  <Route exact path="/">*/}
        {/*    <Home/>*/}
        {/*  </Route>*/}
        {/*  <Route path="/login">*/}
        {/*    <Login />*/}
        {/*  </Route>*/}
        {/*  /!* <Route path="*"> *!/*/}
        {/*  /!* <Exception404 /> *!/*/}
        {/*  /!* </Route> *!/*/}
        {/*</App>*/}
      </Router>
    )
  }
}
export default IRouter;

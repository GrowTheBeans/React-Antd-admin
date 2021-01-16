import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from '../pages/home/home.jsx';
// import Login from '../pages/login/login.jsx';
import IAdmin from '../pages/admin/admin.jsx';
// import Button from '../pages/AntComponents/UI/Buttons/button.jsx';
import Exception404 from '../pages/Exception/404.jsx';

let history = createBrowserHistory();

class IRouter extends Component {
  render() {
    return (
      <Router className="router_containers" history={history}>
        <IAdmin>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/404">
            <Exception404/>
          </Route>
        </IAdmin>
      </Router>
    )
  }
}

export default IRouter;

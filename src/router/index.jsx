import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavHeader from '../Layouts/TopNavHeader/index.jsx';
import UserLogin from '../Layouts/UserLogin/index.jsx';
import Exception404 from '../components/Exception/404.jsx';

class router extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TopNavHeader} />
          <Route path="/login" component={UserLogin} />
          <Route path="*" component={Exception404}/>
        </Switch>
      </Router>
    )
  }
}
export default router;

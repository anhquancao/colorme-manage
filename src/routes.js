import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LoginContainer from './containers/LoginContainer';
import App from './components/App';
import DashboardContainer from './containers/DashboardContainer';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardContainer}/>
    </Route>
    <Route path="login" component={LoginContainer}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

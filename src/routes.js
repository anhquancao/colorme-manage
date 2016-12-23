import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import DashboardContainer from './containers/DashboardContainer';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardContainer}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

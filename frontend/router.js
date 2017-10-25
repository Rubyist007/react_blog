import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/index'
import Categories from './components/Categories/index'


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Categories} />
      <Route path="post" component={Categories} />
      <Route path="post/:userId" component={Categories} />
    </Route>
  </Router>
);

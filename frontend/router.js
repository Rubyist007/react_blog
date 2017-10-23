import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Root from './components/containers/container-root-patch'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AllCategory} >
      //<Route path="post" component={AllPost} />
      //<Route path="post/:userId" component={Post} />
    </Route>
  </Router>
);

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Root from './components/Root/index'

const routes = [{
  path:"/",
  getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('./components/Root/index').default)
    })
  }
}];

export default (
  <Router history={browserHistory} routes={routes} />
);

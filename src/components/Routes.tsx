import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Detail from '../containers/Detail';

const Routes = (): ReactElement => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/pokemon/:name" component={Detail} />
  </Switch>
);

export default Routes;

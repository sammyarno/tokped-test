import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Detail from '../containers/Detail';
import MyPoke from '../containers/MyPoke';

const Routes = (): ReactElement => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/pokemon/:name" component={Detail} />
    <Route exact path="/mypoke" component={MyPoke} />
  </Switch>
);

export default Routes;

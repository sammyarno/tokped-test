import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Detail from '../containers/Detail';
import MyPoke from '../containers/MyPoke';

const Routes = (): ReactElement => (
  <Switch>
    <Route exact path="/tokped-test/" component={Home} />
    <Route exact path="/tokped-test/pokemon/:name" component={Detail} />
    <Route exact path="/tokped-test/mypoke" component={MyPoke} />

    <Route component={() => <Redirect to="/tokped-test/" />} />
  </Switch>
);

export default Routes;

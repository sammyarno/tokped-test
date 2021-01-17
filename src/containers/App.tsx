import React, { ReactElement } from 'react';
import Navbar from '../components/Navbar';
import Routes from '../components/Routes';

const App = (): ReactElement => (
  <div className="app">
    <Navbar />
    <Routes />
  </div>
);

export default App;

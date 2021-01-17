import React, { ReactElement } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';

const App = (): ReactElement => (
  <div className="app">
    <Navbar />
    <Home />
  </div>
);

export default App;

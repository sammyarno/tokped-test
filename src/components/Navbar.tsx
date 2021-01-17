import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (): ReactElement => (
  <div className="navbar">
    <div className="menu">
      <Link to="/">
        <img src="https://pokeapi.co/static/pokeapi_256.888baca4.png" alt="logo" />
      </Link>
    </div>
    <div className="menu">
      <Link to="/mypoke">
        <h3>
          myPoké
        </h3>
      </Link>
    </div>
  </div>
);

export default Navbar;

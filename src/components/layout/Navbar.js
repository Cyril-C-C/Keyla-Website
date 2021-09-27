import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Navbar = ({ icon }) => {
  return (
    <header
      className='header'
      id='header'
      style={{ backgroundImage: `url(Bg.png)` }}
    >
      <section className='navbar' id='navbar'>
        <h1>
          <img src='keyla.png' alt='logo' />
        </h1>
        <ul>
          <i className={icon} onclick='showMenu()'></i>
        </ul>
      </section>
    </header>
  );
};

Navbar.propTypes = {
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  icon: 'fa fa-bars',
};

export default Navbar;

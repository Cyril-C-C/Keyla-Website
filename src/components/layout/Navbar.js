import React from 'react';

const Navbar = () => {
  return (
    <header
      className='header'
      id='header'
      style={{ backgroundImage: `url(Bg.png)` }}
    >
      <section className='navbar' id='navbar'>
        <section className='logo'>
          <h1>
            <a href='#!'>
              <img src="keyla.png" alt="" />
            </a>
          </h1>
        </section>
        <section className='bar'>
          <h1>
            <a href='#!'>
              <i className='fa fa-bars fa-2x' aria-hidden='true'></i>
            </a>
          </h1>
        </section>
      </section>
    </header>
  );
};

export default Navbar;

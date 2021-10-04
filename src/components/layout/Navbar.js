import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
            <Link href='#'>
              <i className='fa fa-bars fa-2x' aria-hidden='true' onClick={showSidebar}></i>
            </Link>
          </h1>
        </section>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <i className='fa fa-close' />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;

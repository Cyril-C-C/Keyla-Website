import React, { Fragment } from 'react';

export const Control = () => {
  return (
    <Fragment>
      <section class='nav-links' id='navLinks'>
        <i class='fa fa-times' onclick='hideMenu()'></i>
        <ul>
          <li>
            <a href='/index.html'>HOME</a>
          </li>
          <li>
            <a href='/about.html'>ABOUT</a>
          </li>
          <li>
            <a href='/attribute.html'>ATTRIBUTES</a>
          </li>
          <li>
            <a href='/testimonials.html'>TESTIMONIALS</a>
          </li>
          <li>
            <a href='/contact.html'>CONTACT</a>
          </li>
          <li>
            <a href='/videos.html'>VIDEOS</a>
          </li>
          <li>
            <a href='/gallary.html'>GALLERY</a>
          </li>
        </ul>
      </section>
      <i class='fa fa-bars' onclick='showMenu()'></i>
    </Fragment>
  );
};

export default Control;

import React, { Fragment } from 'react';

export const ControlLead = () => {
  return (
    <Fragment>
      <section className='links' id='links'>
        <img src='keyla.png' alt='' />
        <i className='fa fa-times' onclick='hideMenu()'></i>
        <ul>
          <li>
            <a href='/index.html'>ABOUT US</a>
          </li>
          <li>
            <a href='/about.html'>SERVICES</a>
          </li>
          <li>
            <a href='/attribute.html'>PORTFOLIO</a>
          </li>
          <li>
            <a href='/testimonials.html'>CONTACT US</a>
          </li>
          <section className='small-links'>
            <li>
              <a href='/videos.html'>CAREER</a>
            </li>
            <li>
              <a href='/gallary.html'>BLOG</a>
            </li>
          </section>
        </ul>
      </section>
    </Fragment>
  );
};

export default ControlLead;

import React from 'react';

const First = () => {
  return (
    <section className='hero'>
      <section className='hero-page'>
        <section>
          <h1>
            <span style={{ fontSize: '3rem' }}>
              NEXT LEVEL
              <br /> <span style={{ color: 'blue' }}>TECH</span> &{' '}
              <span style={{ color: 'blue' }}>CONSULTING</span>
            </span>
          </h1>
          <hr style={{ color: 'blue', width: '4rem', weight: '2rem' }} />
          <p>
            Let's help bring your brilliant digital experience ideas to life,
            with the <br />
            help of our Amazing Design and Enigineering team.
          </p>
          <a href='/about.html' class='hero-btn'>
            GET STARTED
          </a>
        </section>
        <section>
          <img src='play.png' alt='play-button' />
        </section>
      </section>
      <section className='nav'>
        <section>
          <p>Our Clients / Partners...</p>
        </section>
        <section className='nav-links'>
          <ul>
            <li>
              <a href='#!'>
                <img src='K.png' alt='' />
              </a>
            </li>
            <li>
              <a href='#!'>
                <img src='I.png' alt='' />
              </a>
            </li>
            <li>
              <a href='#!'>
                <img src='A.png' alt='' />
              </a>
            </li>
            <li>
              <a href='#!'>
                <img src='F.png' alt='' />
              </a>
            </li>
            <li>
              <a href='#!'>
                <img src='M.png' alt='' />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default First;

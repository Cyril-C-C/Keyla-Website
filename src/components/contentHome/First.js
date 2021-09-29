import React from 'react';

const First = () => {
  return (
    <section className='hero'>
      <section className='hero-page'>
        <section>
          <h1>
            <span
              style={{
                fontSize: '3rem',
                fontStyle: 'normal',
                fontWeight: '800',
                lineHeight: '120%',
                lineHeightStep: '-0.03125rem',
              }}
            >
              NEXT LEVEL
              <br /> <span style={{ color: '#2D9CDB' }}>TECH</span> &{' '}
              <span style={{ color: '#2D9CDB' }}>CONSULTING</span>
            </span>
          </h1>
          <img
            src='line.png'
            alt=''
            style={{ width: '4rem', margin: '1rem 0' }}
          />
          <p>
            Let's help bring your brilliant digital experience ideas to life,
            with the <br />
            help of our Amazing Design and Enigineering team.
          </p>
          <a href='/about.html' class='hero-btn'>
            GET STARTED
          </a>
        </section>
        <section className='playing'>
          <a href='#!'>
            <i
              className='fa fa-play-circle-o fa-5x'
              aria-hidden='true'
            ></i>
          </a>
        </section>
      </section>
      <section className='navMain'>
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
            </ul>
          </section>
        </section>
        <section className='msg'>
          <a href='#!'>
            <img src='M.png' alt='' />
          </a>
        </section>
      </section>
    </section>
  );
};

export default First;

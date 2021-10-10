import React from 'react';

const Fourth = () => {
  return (
    <header className='header1'>
      <section className='hero1'>
        <section className='hero-page1'>
          <section className='kex'>
            <img src='kexzekogo2.png' alt='' />
            <h1>
              <span>AN E-COMMERCE APP</span>
            </h1>
            <img
              src='linewhite.png'
              alt=''
              style={{ width: '4rem', margin: '1rem 0' }}
            />
            <p>
              Kexze is a multipurpose ecommerce platform that
              <br />
              engages in a variety of vendors and services which
              <br /> includes: Supermarkets, Restaurants,
              <br />
              Transportation and Errand services.
            </p>
            <a href='#!' class='hero-btn1'>
              FIND OUT MORE
            </a>
          </section>
          <section className='phone'>
            <img src='2phones.png' alt='' />
          </section>
        </section>
      </section>
    </header>
  );
};

export default Fourth;

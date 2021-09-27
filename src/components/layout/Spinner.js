import React, { Fragment } from 'react';
import spinner from './spinner.png';
import Spin from './Spinner.gif';

export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '10rem', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
      <img
        src={Spin}
        style={{ width: '10rem', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
};

export default Spinner;

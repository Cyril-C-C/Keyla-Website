import React, { Fragment } from 'react';
import spinner from './spinner.png';

export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '10rem', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
};

export default Spinner;

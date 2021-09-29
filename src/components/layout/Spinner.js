import React, { Fragment, useState } from 'react';
import spinner from './spinner.png';
import ClipLoader from 'react-spinners/ClipLoader';

export const Spinner = () => {
  let [loading] = useState(true);
  let [color] = useState('#2d9cdb');

  return (
    <Fragment>
      <section className='loader'>
        <section className='keylaSpinner'>
          <img
            src={spinner}
            alt='Loading...'
          />
        </section>
        <section className='clipLoader'>
          <ClipLoader color={color} loading={loading} size={300} />
        </section>
      </section>
    </Fragment>
  );
};

export default Spinner;

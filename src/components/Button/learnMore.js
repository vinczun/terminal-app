import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/learnMore.scss';

const learnMore = () => {
  return (
    <Fragment>
      <Link to='/about' className='learnMore' role='button'>
        LEARN MORE
      </Link>
    </Fragment>
  );
};

export default learnMore;

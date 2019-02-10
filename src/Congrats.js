import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
  return (
    <div data-test='component-congrats'>
      <span data-test='component-display'>
        {props.success ? 'Congratulations!' : ''}
      </span>
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;

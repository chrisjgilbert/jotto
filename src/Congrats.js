import React from 'react';

export default (props) => {
  return (
    <div data-test='component-congrats'>
      <span data-test='component-display'>
        {props.success ? 'Congratulations!' : ''}
      </span>
    </div>
  );
}

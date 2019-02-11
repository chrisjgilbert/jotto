import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  return (
    <div data-test='component-guessed-words'>
      <h1 data-test='guess-intructions'>
        Please guess a word!
      </h1>
    </div>
  )
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;

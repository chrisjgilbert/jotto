import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents;

  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='guess-intructions'>
        Please guess a word!
      </span>
    )
  } else {
    let guessedWords = props.guessedWords.map((word, index) => {
      return (
        <tr data-test='guessed-word' key={index}>
          <td>
            {word.guessedWord}
          </td>
          <td>
            {word.letterMatchCount}
          </td>
        </tr>
      )
    });
    contents = (
      <div data-test='guessed-words'>
        <table>
          <tr>
            <th>Guessed Words</th>
            <th>Letter Match Count</th>
          </tr>
          {guessedWords}
        </table>
      </div>
    )
  }
  return (
    <div data-test='component-guessed-words'>
      {contents}
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

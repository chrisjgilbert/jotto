import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords { ...setupProps } />);
}

test('does not throw error with expected props', () => {
  checkProps(GuessedWords, defaultProps)
});

describe('if there are no words guessed', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-intructions')
    expect(instructions.text()).toContain('Please guess a word!')
  });
});

describe('if there are guessed words', () => {

  let wrapper;
  let guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders the guessed words setion', () => {
    const guessedWordsComp = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsComp.length).toBe(1);
  });
});

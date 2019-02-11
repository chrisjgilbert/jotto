import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'ape', letterMatchCount: 4 },
          { guessedWord: 'owl', letterMatchCount: 10 },
          { guessedWord: 'dinosaur', letterMatchCount: 2 }
        ]} />
      </div>
    );
  }
}

export default App;

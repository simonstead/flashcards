import React, { Component } from 'react';
import './App.css';
import Data from './data/spanish_words.json';
import { randomWord } from './helpers';

const Flashcard = ({ word }) => (
  <div className="Flashcard">
    <div className="Spanish">
      <div className="Rank">{word.Rank}</div>
      <h1 className="Word">{word.Spanish}</h1>
    </div>
    <div className="English">
      <div className="Rank">{word.Rank}</div>
      <h1 className="Word">{word.English}</h1>
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: randomWord(Data)
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">Spanish flashcards</h1>
        <Flashcard word={this.state.word} />
        <div className="Button">
          <a onClick={() => this.setState({ word: randomWord(Data) })}>Next</a>
        </div>
      </div>
    );
  }
}

export default App;

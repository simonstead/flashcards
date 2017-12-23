import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './data/spanish_words.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('can read data', () => {
  expect(Data[0]).toMatchSnapshot();
});

it('can get a random word', () => {
  const randomWord = words => words[Math.floor(Math.random() * words.length)];
  expect(parseInt(randomWord(Data).Rank, 10)).toBeGreaterThan(0);
});

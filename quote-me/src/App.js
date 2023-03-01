import './App.css';
import React from 'react';
import Card from './Card';
// import { getRandomQuote } from './apiCalls'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: []
    }
  }
  componentDidMount() {
    return fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <main className="App">
        <header>Quote Me</header>
        <Card />
      </main>
    );
  }
}

export default App;

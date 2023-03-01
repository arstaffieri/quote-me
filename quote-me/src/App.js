import './App.css';
import React from 'react';
import Card from './Card';
// import { getRandomQuote } from './apiCalls'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      author: ''
    }
  }
  componentDidMount() {
    return fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        quote: data.content,
        author: data.author
      })
    })
  }

  render() {
    return (
      <main className="App">
        <header>Quote Me</header>
        <Card content={this.state.quote} author={this.state.author}/>
      </main>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import Card from './Card';
// import { getRandomQuote } from './apiCalls'
// import Search from './Search';
import { Route, Switch, Link } from 'react-router-dom';
import SearchPage from './SearchPage'
import AboutPage from './AboutPage'
// import Home from './Home'

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
        <div className='header'>
          <h1>Quote Me</h1>
        </div>
        <div className='links-container'>
          <Link to='/searchPage'>
          <p>Search for Quotes</p>
          </Link>
          
        </div>
        <Switch>
          <Route exact path="/" render={() => <Card content={this.state.quote} author={this.state.author}/>}></Route>
          <Route exact path='/searchPage' component={SearchPage}></Route>
          {/* <Route exact path='/about' component={AboutPage}></Route> */}
        </Switch>
      </main>
    );
  }
}

export default App;

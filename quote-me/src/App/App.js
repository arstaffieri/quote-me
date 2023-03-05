import './App.css';
import React from 'react';
import Card from '../Card/Card';
// import { getRandomQuote } from './apiCalls'
// import Search from './Search';
import { Route, Switch, Link } from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage'
import AboutPage from '../AboutPage/AboutPage'
import Error from '../Error';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      author: '',
      searchTerm: '',
      isClicked: false,
      authorDetails: {}
    }
  }

  componentDidMount() {
    return fetch("https://api.quotable.io/random")
    .then((response) => {
      if(!response.ok) {
        throw new Error('Houston, we have a problem.')
      } else {
        return response.json()
      }
    })
    .then(data => {
      this.setState({
        quote: data.content,
        author: data.author,
        id: data._id
      })
    })
  }
  
  getAuthorDetails = (author) => {
    return fetch(`https://quotable.io/search/authors?query=${author}`)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Houston, we have a problem.")
      } else {
        return response.json()
      }
    })
    .then(data => {
      this.setState({
        authorDetails: data.results[0]
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
          <Link to='/'>
          <p>Go Home</p>
          </Link>
          <Link to='/searchPage'>
          <p>Search for Quotes</p>
          </Link>
          
        </div>
        <Switch>
          <Route exact path="/" render={() => <Card getAuthorDetails={this.getAuthorDetails} content={this.state.quote} author={this.state.author}/>}></Route>
          <Route exact path='/searchPage'> <SearchPage getAuthorDetails={this.getAuthorDetails}/> </Route>
          <Route exact path='/about'> <AboutPage authorDetails={this.state.authorDetails}/> </Route>
          <Route exact path='/*' render={() => <Error />}></Route>
        </Switch>
      </main>
    );
  }
}




export default App;


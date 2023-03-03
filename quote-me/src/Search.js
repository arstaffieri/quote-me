import React from 'react'
import './Search.css'
import Card from './Card'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    searchForThings = () => {
        return fetch(`https://api.quotable.io/search/quotes?query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                searchTerm: data.author
            })
        })
      }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ searchTerm: event.target.value }, () => {
        });
      };

    render() {
        return (
            <section className='search-container'>
                <form className='search-form' onSubmit={(event) => event.preventDefault()}>
                    <input 
                        className='search-input'
                        type='text'
                        placeholder='Search for authors'
                        name='search bar'
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                        <button className='button' onClick={this.searchForThings}>Search</button>
                </form>
                <Card />
            </section>
        )
    }
}

export default Search
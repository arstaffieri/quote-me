import React from 'react'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    searchForThings = (searchTerm) => {
        return fetch(`https://api.quotable.io/search/quotes?query=${searchTerm}`)
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
          this.searchForThings(this.state.searchTerm);
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
            </section>
        )
    }
}

export default Search
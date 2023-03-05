import React from 'react'
import './Search.css'
import Card from './Card'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            fullInfo: [],
            isClicked: false
        }
    }

    searchForThings = () => {
        return fetch(`https://api.quotable.io/search/quotes?query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            this.setState({
                searchTerm: data.author,
                fullInfo: data.results,
                isClicked: true
            })
        })
      }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ searchTerm: event.target.value }, () => {
        });
      };

    render() {
        const isClicked = this.state.isClicked
        const cardList = this.state.fullInfo.map((info) => {
            return <Card getAuthorDetails={this.props.getAuthorDetails} author={info.author} content={info.content} />
        })
        return (
            <article>
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
                <div className='card-display'>
                    {isClicked && cardList}
                    {/* {!isClicked && <p>Search for someone</p>} */}
                </div>
            </article>
        )
    }
}

export default Search
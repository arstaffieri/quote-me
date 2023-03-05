import React from 'react'
import './Search.css'
import Card from '../Card/Card'
import PropTypes from 'react'

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
        fetch(`https://api.quotable.io/search/quotes?query=${this.state.searchTerm}`)
        .then((response )=> {
            if(!response.ok) {
                throw new Error('Houston, we have a problem.')
            } else {
                return response.json()
            }
        })
        // .then((data) => {
        //     if(!data.results.length) {
        //         throw new Error('Search Term Not Found. Try Again!')
        //         return <Card />
        //     }
        // })
        .then(data => {
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
            return <Card getAuthorDetails={this.props.getAuthorDetails} author={info.author} content={info.content} key={info._id}/>
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
                        onChange={this.handleChange}
                    />
                        <button className='button' onClick={this.searchForThings}>Search</button>
                </form>
                </section>
                <div className='card-display'>
                    {isClicked && cardList}
                </div>
            </article>
        )
    }
}

Search.ReactPropTypes = {
    searchTerm: PropTypes.string,
    fullInfo: PropTypes.array,
    isClicked: PropTypes.bool
}


export default Search
import React from "react";
import './Card.css'
import { Link } from 'react-router-dom'


const Card = ({_id, author, content, getAuthorDetails }) => {
    return(
        <Link className="link" to='/about'>
        <div className="card" key={_id} onClick={() => getAuthorDetails(author)}>
            <h3>{content}</h3>
            <h4>{author}</h4>
        </div>
        </Link>
    )
}

export default Card
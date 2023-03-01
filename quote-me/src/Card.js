import React from "react";
import './Card.css'

const Card = ({id, author, content }) => {
    return(
        <div className="card">
            <div className="quote-container" key={id}>
            <h3>{content}</h3>
            <h4>{author}</h4>
            </div>
        </div>
    )
}

export default Card
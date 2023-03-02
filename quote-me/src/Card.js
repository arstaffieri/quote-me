import React from "react";
import './Card.css'

const Card = ({id, author, content }) => {
    return(
        <div className="card">
            <h3>{content}</h3>
            <h4>{author}</h4>
        </div>
    )
}

export default Card
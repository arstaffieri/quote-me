import React from "react";
import './About.css'

const AboutPage = ({authorDetails}) => {
    console.log(authorDetails)
        return(
            <div className="bio-container">
                <p>Name: {authorDetails.name}</p>
                <p>Description: {authorDetails.description}</p>
                <p>Brief Bio: {authorDetails.bio}</p>
                <a href={authorDetails.link} target="_blank">Learn More Here!</a>
            </div>
        )
    }

    // 

export default AboutPage
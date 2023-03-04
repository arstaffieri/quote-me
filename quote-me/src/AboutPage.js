import React from "react";
import './About.css'

class AboutPage extends React.Component {
    constructor() {
        super()
        this.state = {
            person: []
        }
    }
    componentDidMount() {
        return fetch(`https://quotable.io/authors`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return(
            <div>
                This should have a bunch of details on it.
            </div>
        )
    }
}

export default AboutPage
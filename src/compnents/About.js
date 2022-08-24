import React from "react";

function About(props) {
    return (
        <div className="about-div">
            <h1 className="about-title">{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default About;
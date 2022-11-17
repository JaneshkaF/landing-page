import React from "react";

const Jumbotron = () => {
    let jumboText = {
        title: "Welcome to Janeshkas' Landing Page!",
        description: "Hi ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        buttonLabel: "Call to action!",
        buttonURL: "#"
    };
    return (
        <div className="jumbotron bg-light">
            <h1 className="display-4">{jumboText.title}</h1>
            <p className="lead">{jumboText.description}</p>
            <a className="btn btn-primary btn-lg" href={jumboText.buttonURL} role="button">
               {jumboText.buttonLabel}
            </a>
        </div>    
    )
}

export default Jumbotron
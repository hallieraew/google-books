import React from "react";
import "./style.css";

function Result(props) {
return(
    <div>

    <ul>
        {props.results.map(result => (
            <li>{result.title}</li>
            <li>{result.author}</li>
            <li>{result.plot}</li>
            <img 
            src={result.image}
            alt={result.title}
            />
            )
            )}
    </ul>
            </div>
)
}
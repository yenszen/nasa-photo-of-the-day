import React from "react";

const PhotoCard = props => {
    return (
        <div className="photo-card">
            <p>{props.date}</p>
            <h3>{props.title}</h3>
            <img className="image" alt={props.title} src={props.image} />
            <div className="text">
                <p>{props.explanation}</p>
            </div>
        </div>
    );
}

export default PhotoCard;
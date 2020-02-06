import React from "react";

const PhotoCard = props => {
    return (
        <div className="photo-card">
            <img className="image" alt={props.title} src={props.image} />
        </div>
    );
}

export default PhotoCard;
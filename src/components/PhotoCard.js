import React from "react";
import styled from "styled-components";

const ApodCard = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const PhotoCard = props => {
    return (
        <ApodCard>
            <p>{props.date}</p>
            <h3>{props.title}</h3>
            <img className="image" alt={props.title} src={props.image} />
            <Text>
                <p>{props.explanation}</p>
            </Text>
        </ApodCard>
    );
}

export default PhotoCard;
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

const Display = styled.div`
    width: 35%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Button = styled.button`
    background: rgb(0, 0, 0);
    color: gold;
    border: black;
    width: 6rem;
    height: 2rem;
    border-radius: 12px;
`;

const PhotoCard = props => {
    return (
        <ApodCard>
            <p>{props.date}</p>

            <Display>
                <Button>Previous Day</Button>
                <Button>Next Day</Button>
                <Button>Reset</Button>
            </Display>
            
            <h3>{props.title}</h3>
            <img className="image" alt={props.title} src={props.image} />
            <Text>
                <p>{props.explanation}</p>
            </Text>
        </ApodCard>
    );
}

export default PhotoCard;
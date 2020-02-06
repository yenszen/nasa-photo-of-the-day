import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

const PhotoList = () => {
    // add state for the data we're getting from NASA
    const [data, setData] = useState([]);

    // add an effect hook to handle the API call side effect
    useEffect(() => {
        // use axios to fetch the data and 
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=m7pVYbifI5KJU1Bc2FxRMfFfgQndp0E74Muadal0")
            .then(response => {
                // console.log("Response", response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []); // added dependency array to prevent infinite loop

    return (
        console.log("data", data),
        <div className="container">
            {/* added PhotoCard props to be inherited in PhotoCard.js */}
            <PhotoCard image={data.url} title={data.title} explanation={data.explanation} date={data.date} />
        </div>
    )
}

export default PhotoList;
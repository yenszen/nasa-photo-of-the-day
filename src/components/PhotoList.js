import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

const PhotoList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=m7pVYbifI5KJU1Bc2FxRMfFfgQndp0E74Muadal0")
            .then(response => {
                // console.log("Response", response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        console.log("data", data),
        <div className="container">
            <PhotoCard image={data.url} title={data.title} />
        </div>
    )
}

export default PhotoList;
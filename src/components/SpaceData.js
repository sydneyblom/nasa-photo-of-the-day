import React, { useState, useEffect } from "react";
import SpaceCard from "./SpaceCard";
import axios from "axios";



function SpaceData() {
    // NOTE: The value given to useState() must be of the same type as your value is expected to be
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
          const data = response.data;
          console.log("This is the data", data);
          setData(data);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);

    return (
      <div className="container">
          <SpaceCard
          id={data.title} 
             url={data.url} 
             title={data.title} 
             explanation={data.explanation} 
             date={data.date} 
             copyright={data.copyright}/>
      </div>
    );
  }
  export default SpaceData
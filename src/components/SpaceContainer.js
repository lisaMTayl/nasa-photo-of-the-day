import React, { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";
import axios from "axios";


export default function SpaceContainer({ limit }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=IpSWIoboMnzGCH5JDIFqiGhn16zuwo4kIaBJnHgi&date=2019-07-15")
      .then(response => {
        const SpaceData = response.data.url;
        console.log('photo api:', SpaceData);


      })
      .catch(error => {
        console.log(error, "Error receiving data");
      })
  }, []);


    return <SpaceCard />;

}
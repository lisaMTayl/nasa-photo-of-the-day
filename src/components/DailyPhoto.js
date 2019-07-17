import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoContent from "./PhotoContent";

export default function DailyPhoto( { limit }) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=IpSWIoboMnzGCH5JDIFqiGhn16zuwo4kIaBJnHgi")
      .then(response => {
        const data = response.data;
          console.log('photo api:', data);
          setPhoto(data);
      })
      .catch(error => {
        console.log(error, "Error receiving data");
    })
}, []);
  return photo;
}
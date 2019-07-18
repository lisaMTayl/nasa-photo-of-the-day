import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./components/Title";
import Url from "./components/Url";
import Explanation from "./components/Explanation";
import Date from "./components/Date";
import Copyright from "./components/Copyright";
import Photo from "./components/Photo";




export default function Data() {

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=IpSWIoboMnzGCH5JDIFqiGhn16zuwo4kIaBJnHgi&date=2019-07-15")
      .then(response => {
        // receive data
        setData(response.data);

        // data receipt successful
        console.log('data received: ', setData);
      })
      .catch(error => {
        // data receipt failure
        console.log(error, "Error receiving data");
      })
  }, []);


  return <div className="dataWrapper">
    <h3><Title title="data.title" /></h3>
    <Photo photo="data.url" src="data.url" alt="data.title" />
    <p><Url url="data.url" /></p>
    <p><Explanation explanation="data.explanation" /> </p>
    <h4><Date date="data.date"/></h4>
    <h5><Copyright copyright="data.copyright"/></h5>
  </div>
};

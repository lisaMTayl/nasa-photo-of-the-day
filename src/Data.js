
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"
import "./App.css";


export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=IpSWIoboMnzGCH5JDIFqiGhn16zuwo4kIaBJnHgi&date=2019-07-15")
      .then(res => {
        // receive data
        setData(res.data);
        // data receipt successful
        console.log(res.data);
        console.log(setData);

      })
      .catch(error => {
        // data receipt failure
        console.log(error, "Error receiving data");
      });
  }, []);



return (
  <div className="App">
    <h1>
      Explore Space with NASA
    </h1>
    {data
      ? <Card title={data.title}
                   url={data.url}
                   explanation={data.explanation}
                   date={data.date}
                   copyright={data.copyright}/>
      : <div>Loading</div>}
  </div>
);
}
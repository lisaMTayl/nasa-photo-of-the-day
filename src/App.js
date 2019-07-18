import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../src/Card";
import "./App.css";



function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=IpSWIoboMnzGCH5JDIFqiGhn16zuwo4kIaBJnHgi&date=2019-07-15")
      .then(res => {
        // data receipt successful
        console.log(res.data);
        console.log(setData);
        // receive data
        setData(res.data);


      })
      .catch(error => {
        // data receipt failure
        console.log(error, "Error receiving data");
      });
  }, []);



  return (
    <div className="App">
      <h1>Explore Space With NASA</h1>
      <Card title={data.title}
                url={data.url}
                explanation={data.explanation}
                date={data.date}
                copyright={data.copyright}/>

    </div>
  );
}

export default App
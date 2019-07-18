import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./components/Title";
import Url from "./components/Url";
import Explanation from "./components/Explanation";
import Date from "./components/Date";
import Copyright from "./components/Copyright";




function Data({ limit }) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [date, setDate] = useState([]);
  const [copyright, setCopyright] = useState([]);


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
    <img src={Url} alt={Title} />
    <p><Url /></p>
    <p><Explanation /> </p>
    <h4><Date /></h4>
    <h5><Copyright/></h5>
  </div>
  console.log({ title });
};

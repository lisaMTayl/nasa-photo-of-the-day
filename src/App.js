//App.js
import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import Explanation from "./components/Explanation";

export default function App() {

    return (
      <div className="App">
        <h1>NASA's Astronomy Picture of the Day</h1>
        <Data />
        <Photo />
      </div>
    );

}

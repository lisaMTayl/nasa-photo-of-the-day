import React from "react";

export default function Photo (props) {
  console.log(props);
  return <div>
    <img src={props.url} alt="Space" />
      </div>

};
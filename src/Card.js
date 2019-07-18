import React from 'react';

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.url}  alt={props.title}/>
      <div>{props.date}</div>
      <p>
        {props.explanation}
      </p>
      <h6>{props.copyright}</h6>
    </div>
  );
}


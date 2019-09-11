import React from "react";

const SpaceCard = props => {
  return (
    <div className="space-card" key={props.title} >
    <img className="space-image" alt="space" src={props.url} />
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
      <p>Date: {props.date}</p>
      <p>Copyright: {props.copyright}</p>
    </div>
  );
};

export default SpaceCard;
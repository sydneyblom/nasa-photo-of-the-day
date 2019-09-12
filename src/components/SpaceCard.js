import React from "react";
import styled from "styled-components";



const NasaImg = styled.img`
  width: 380px;
  height: 380px
  object-fit: scale;
  flex-shrink: 3;
`;
const SpaceCard = props => {
  return (
    <div className="space-card" key={props.title} >
    <NasaImg alt="space" src={props.url} />
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
      <p>Date: {props.date}</p>
      <p>Copyright: {props.copyright}</p>
    </div>
  );
};

export default SpaceCard;
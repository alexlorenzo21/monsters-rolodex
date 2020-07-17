import React from "react";
import "./card.styles.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default Card;

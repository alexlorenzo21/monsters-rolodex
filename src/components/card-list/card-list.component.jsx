import React from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((filteredMonster) => (
        <Card
          key={filteredMonster.id}
          id={filteredMonster.id}
          name={filteredMonster.name}
          email={filteredMonster.email}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;

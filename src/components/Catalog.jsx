import React from "react";
import ProfCard from "./ProfCard";
import "./Catalog.css";
const Catalog = ({ cards }) => {
  return (
    <div className="container">
      {cards.map((card, index) => (
        <div key={index} className="item">
          <ProfCard
            title={card.title}
            subheader={card.subheader}
            image={card.image}
            content={card.content}
            date={card.date}
          />
        </div>
      ))}
    </div>
  );
};

export default Catalog;

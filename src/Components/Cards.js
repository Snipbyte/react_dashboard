import React from "react";
import CardItem from "./CardItem";

const Cards = () => {
  const cardData = [
    { title: "Lorem Ipsum 1", desc: "Lorem Ipsum 1" },
    { title: "Lorem Ipsum 2", desc: "Lorem Ipsum 2" },
    { title: "Lorem Ipsum 3", desc: "Lorem Ipsum 3" },
  ];

  return (
    <div className="md:flex md:items-center md:justify-center p-2">
      {cardData.map((data, index) => (
        <CardItem key={index} title={data.title} desc={data.desc} />
      ))}
    </div>
  );
};

export default Cards;

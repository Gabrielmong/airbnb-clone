import React from "react";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

export default function Card({ person }) {
  return (
    <div className="card">
      <p>Name:{person.name}</p>
      <img src={images[person.image]} className="card--image" />
      <div className="card--stats">
        <img
          src={images["star.png"]}
          className="card--stats--star"
          alt="star"
        />
        <span>{person.rating}</span>
        <span className="gray">(6) • </span>
        <span className="gray">{person.country}</span>
      </div>
      <p>{person.desc}</p>
      <p>
        <span className="bold">From ${person.price}</span> / person
      </p>
    </div>
  );
}

// <img src={`../images/${prop.image}`} className="card--image" alt="PP"/>
// <img src={prop.image} className="card--image" alt="PP"/>

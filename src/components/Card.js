import React from "react";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function badgeTextFunc(person) {
  let badgeText;
  if (person.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (person.location === "Online") {
    badgeText = "ONLINE";
  }
  return badgeText;
}
const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

export default function Card({ person }) {
  let badgeText = badgeTextFunc(person);
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={images[person.coverImg]} className="card--image" alt="" />
      <p className="bold">{person.title}</p>
      <div className="card--stats">
        <img
          src={images["star.png"]}
          className="card--stats--star"
          alt="star"
        />
        <span>{person.stats.rating}</span>
        <span className="gray">({person.stats.reviewCount}) • </span>
        <span className="gray">{person.location}</span>
      </div>
      <p className="card--description">{person.description}</p>
      <p>
        <span className="bold">From ${person.price}</span> / person
      </p>
    </div>
  );
}

// <img src={`../images/${prop.image}`} className="card--image" alt="PP"/>
// <img src={prop.image} className="card--image" alt="PP"/>

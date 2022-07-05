import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

let people = [
  {
    name: "Kate Zaferes",
    image: "katie-zaferes.png",
    rating: "5",
    country: "USA",
    desc: "I dont remember what goes here",
    price: 156,
  },
  {
    name: "Edwin Leon",
    image: "edwin.jpg",
    rating: "2.5",
    country: "CRC",
    desc: "Generic description here",
    price: 300,
  },
  {
    name: "Gabriel Monge",
    image: "fatfuck.jpg",
    rating: "6",
    country: "CRC",
    desc: "I dont remember what goes here either but im cheap as fuck.",
    price: 69,
  },
];

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
        {people.map((person) => (
          <Card key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
}


// const carlos= {name:"carlos"}
// let users = [carlos,{name:"gabriel"}]

// [carlos,gabriel] = 


/*  

---Old way---

const persons = ['edwin', 'carlos', 'gabriel'];

const person1 = persons[0];
const person2 = persons[1];
const person3 = persons[2];


---Destructuring---

const persons = ['edwin', 'carlos', 'gabriel'];

const [person1, person2, person3] = persons;

*/
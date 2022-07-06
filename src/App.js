import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import people from "./data";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mainContent">
        <Hero />
        <div className="cards">
          {people.map((person) => (
            <Card key={person.id} person={person} />
          ))}
        </div>
      </div>
    </>
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

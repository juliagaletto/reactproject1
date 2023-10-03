import React from "react";
import { useState } from "react";
import "./../../styles/globals.css";
import Navbar from "../Navbar/Navbar.component";

function App() {
  const user = {
    name: "Julia Galetto",
    photo: "/jg.jpeg",
  };

  const [count, setCount] = useState(0);

  function sayHi() {
    alert("Hello! Have a good one!");
    setCount(count + 1);
  }

  const services = [
    { title: "English teacher", id: 1 },
    { title: "English <> Spanish translator", id: 2 },
    { title: "Full-stack developer (???)", id: 3 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src="/hoolia2.png" className="App-logo" alt="logo" />
      </header>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="About">
        <h1>Hi there. Welcome aboard.</h1>
        <p>
          I'm {user.name}, and you've clicked{" "}
          <button onClick={sayHi}>this button</button> {count} times! Let me
          show you what I'm good (???) at.
        </p>
      </div>
      <div className="Services">
        <ul className="Services__list">
          {services.map((service) => (
            <li key={service.id}>{service.title}</li>
          ))}
        </ul>
      </div>
      <div className="App-footer">
        <img src={user.photo} className="JG-photo" alt="JG" />
        <footer>That's all folks! Be patient, I'm learning.</footer>
      </div>
    </div>
  );
}

export default App;

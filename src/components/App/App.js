import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const user = {
    name: "Julia Galetto",
  };

  function MyButton() {
    const [count, setCount] = useState(0);

    function sayHi() {
      alert("Hello! Have a good one!");
      setCount(count + 1);
    }
    return (
      <button onClick={sayHi}>
        {user.name} and you've clicked this button {count} times!
      </button>
    );
  }

  const services = [
    { title: "English teacher", id: 1 },
    { title: "English <> Spanish translator", id: 2 },
    { title: "Full-stack developer (???)", id: 3 },
  ];

  const listServices = services.map((service) => (
    <li key={service.id}>{service.title}</li>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src="/hoolia2.png" className="App-logo" alt="logo" />
        <h1>Hi there. Welcome aboard.</h1>
        <p>
          I'm <MyButton />. Let me show you what I'm good (???) at.
        </p>
      </header>
      <div>
        <ul>{listServices}</ul>
      </div>
    </div>
  );
}

export default App;

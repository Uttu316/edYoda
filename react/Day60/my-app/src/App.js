import React from "react";
import "./App.css";

const MyApp = ({ welcomeMessage }) => {
  const arr = [
    {
      id: "ijdiewd",
      name: "Utkarsh",
      age: 24,
      city: "Agra",
      address: "Uttar Pradesh, India",
      lname: "Gupta",
    },
    {
      id: "fejfeijo",
      name: "Vivek",
      age: 25,
      city: "Mumbai",
      address: "Maharashtra, India",
      lname: "Jain",
    },
  ];
  const title = welcomeMessage;

  const getFullName = (item) => {
    return item.name + " " + item.lname;
  };

  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h2 title={title}>{welcomeMessage}</h2>
        <h3>
          {arr.map((item) => {
            return (
              <div key={item.id} className="card">
                <h3>{getFullName(item)}</h3>
                <span>
                  {item.age} {item.city} {item.address}
                </span>
              </div>
            );
          })}
        </h3>
      </main>
      <footer className="footer">I love React</footer>
    </div>
  );
};

export default MyApp;

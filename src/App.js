import React from 'react';
import './style.css';
import Card from './../componets/card';
import NavBar from './../componets/navbar';
import data from './../data/data';
export default function App() {
  const cards = data.map((el) => {
    return <Card {...el} />;
  });
  return (
    <div>
      <NavBar />
      {cards}
    </div>
  );
}

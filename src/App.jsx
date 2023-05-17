import React from "react";
import "./App.css";
import {RenderCard} from "./Components/RenderCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./Resources/CardConfig.json"

export default function App() {
    const Card=[data];
  return (
      <div className="App">
        <div className="card-container">
            {Card.map(config => RenderCard(config))}
        </div>
      </div>
  );
}
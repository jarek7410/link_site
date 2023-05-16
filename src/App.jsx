import React from "react";
import "./App.css";
import {RenderCard} from "./Components/RenderCard";
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardConfig from "./Resources/CardConfig"
import data from "./Resources/CardConfig.json"

export default function App() {
    // console.log("data",data)
    // console.log("carddata",CardConfig)
    const Card=[data];
  return (
      <div className="App">
        <div className="card-container">
            {Card.map(config => RenderCard(config))}
        </div>
      </div>
  );
}
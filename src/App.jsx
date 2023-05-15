import React from "react";
import "./App.css";
import {RenderCard} from "./Components/RenderCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardConfig from "./Resources/CardConfig"


export default function App() {
  return (
      <div className="App">
        <div className="card-container">
          {CardConfig.map(config => RenderCard(config))}
        </div>
      </div>
  );
}
import React from "react";
import "./App.css";
import {RenderCard} from "./Components/RenderCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardConfig from "./Resources/CardConfig"


// component: "card",
//     children: [
//   {
//     component: "img",
//     src:
//         "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//   },
//   {
//     component: "body",
//     children: [
//       {
//         component: "title",
//         children: "This is a title"
//       },
//       {
//         component: "subtitle",
//         children: "This is the subtitle"
//       },
//       {
//         component: "text",
//         children:
//             "Some quick example text to build on the card title and make up the bulk of the card's content."
//       },
//       {
//         component: "link",
//         herf: "#",
//         children:
//             "link for linking king"
//       },
//       {
//         component: "button",
//         children: "Click Me!"
//       }
//     ]
//   }
// ]

export default function App() {
  return (
      <div className="App">
        <div className="card-container">
          {CardConfig.map(config => RenderCard(config))}
        </div>
      </div>
  );
}
import React from "react";
import Card from "./components/Cards";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
function Cards({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

// export default Cards;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <App />    
  </React.StrictMode>
);

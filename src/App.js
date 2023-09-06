import React from "react";
import './App.css';
import CardGenerator from "./Components/CardGenerator";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation/>

      <CardGenerator/>
    </div>
  )
}

export default App;
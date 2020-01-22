import React from "react";
import Header from './components/Header';
import CurrentDay from './components/CurrentDay';
import Photo from './components/Photo';
import DaySelector from './components/DaySelector';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentDay />
      <Photo />
      <DaySelector />
    </div>
  );
}

export default App;

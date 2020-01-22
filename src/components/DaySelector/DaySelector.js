import React from "react";
import GenerateDay from './GenerateDay';
import './DaySelector.css'

const DaySelector = (props) => {
  const selectorString = (input) => {
    let year = {input};
    let month = {input};
    let day = {input};

    return `${year}-${month}-${day}`;
  }

  return (
    <div>
      <h4>Choose a Different Day</h4>
      <GenerateDay />
      <button onClick={selectorString()}><strong>Show Me the Image!</strong></button>
    </div>
  );
};

export default DaySelector;
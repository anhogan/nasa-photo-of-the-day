import React from "react";
import GenerateDay from './GenerateDay';
import './DaySelector.css'

const DaySelector = () => {

  return (
    <div>
      <h4>Choose a Different Day</h4>
      <GenerateDay />
      <button><strong>Show Me the Image!</strong></button>
    </div>
  );
};

export default DaySelector;
import React from 'react';

const GenerateDay = () => {
  return (
    <div className="generate-day-container">
      <h4>Choose a Different Day</h4>
      <div className="date-input-container">
        <input type="text" name="Year" placeholder="Year" /><br />
        <input type="text" name="Month" placeholder="Month" /><br />
        <input type="text" name="Day" placeholder="Day" /><br />
      </div>
      <button><strong>Show Me the Image!</strong></button>
    </div>
  );
}

export default GenerateDay;
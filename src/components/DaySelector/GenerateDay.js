import React from 'react';

const GenerateDay = () => {
  return (
    <div className="date-input-container">
      <input type="text" name="year" placeholder="Year (YYYY)" /><br />
      <input type="text" name="month" placeholder="Month (MM)" /><br />
      <input type="text" name="day" placeholder="Day (DD)" /><br />
    </div>
  );
}

export default GenerateDay;
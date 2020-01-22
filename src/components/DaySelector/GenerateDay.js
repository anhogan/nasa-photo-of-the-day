import React from 'react';

const GenerateDay = () => {
  return (
    <div className="date-input-container">
      <input type="text" name="Year" placeholder="Year" /><br />
      <input type="text" name="Month" placeholder="Month" /><br />
      <input type="text" name="Day" placeholder="Day" /><br />
    </div>
  );
}

export default GenerateDay;
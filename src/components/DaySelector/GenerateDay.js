import React from 'react';

const GenerateDay = () => {
  return (
    <div>
      <h4>Choose a Different Day</h4>
      <input type="text" name="Year" value="Year" /><br />
      <input type="text" name="Month" value="Month" /><br />
      <input type="text" name="Day" value="Day" /><br />
      <button>Show Me the Image!</button>
    </div>
  );
}

export default GenerateDay;
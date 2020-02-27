import React from 'react';

const GenerateDay = (props) => {
  const handleYearChange = e => {
    props.setYear(e.target.value);
  };

  const handleMonthChange = e => {
    props.setMonth(e.target.value);
  };

  const handleDayChange = e => {
    props.setDay(e.target.value);
  };

  return (
    <div className="date-input-container">
      <input type="text" name="year" placeholder="Year (YYYY)" onChange={handleYearChange} /><br />
      <input type="text" name="month" placeholder="Month (MM)" onChange={handleMonthChange} /><br />
      <input type="text" name="day" placeholder="Day (DD)" onChange={handleDayChange} /><br />
    </div>
  );
}

export default GenerateDay;
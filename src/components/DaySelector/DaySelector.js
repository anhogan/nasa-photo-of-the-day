import React, { useState } from "react";
import GenerateDay from './GenerateDay';
import './DaySelector.css'

const DaySelector = (props) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const selectorString = (e) => {
    e.preventDefault();

    let newYear = Object.values(year).join().replace(/,/g, '');
    let newMonth = Object.values(month).join().replace(/,/g, '');
    let newDay = Object.values(day).join().replace(/,/g, '');

    props.setQuery(`${newYear}-${newMonth}-${newDay}`);
    props.fetchData();

    setYear('');
    setMonth('');
    setDay('');
  }

  return (
    <div>
      <h4>Choose a Different Day</h4>
      <GenerateDay 
        year={year}
        month={month}
        day={day}
        setYear={setYear} 
        setMonth={setMonth} 
        setDay={setDay} />
      <button onSubmit={selectorString}><strong>Show Me the Image!</strong></button>
    </div>
  );
};

export default DaySelector;
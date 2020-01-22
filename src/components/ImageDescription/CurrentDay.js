import React from "react";

const CurrentDay = (props) => {

  return (
    <div>
      <p className="current-day">{props.day}</p>
    </div>
  );
};

export default CurrentDay;